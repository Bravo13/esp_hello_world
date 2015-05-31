$(document).ready( function(){
	pageInit();
});

function pageInit() {
	$('.svg-inject').svgInject();
	$(".accordion").accordion({
		onFrameOpened:function(){
			console.log(arguments)
		},
	});
}

function renew_networks_list_start() {
	$.get('/scan', function(data){
		window.renew_interval = setInterval(renew_networks_list_status, 2000);
		console.log(data);
	})
}

function renew_networks_list_status() {
	$.get('/scanStatus', function(data){
		var i;
		for( i in data.available ){
			var network = data.available[i];
			template = $('.accordion-template').clone();
			template.find(".ssid-name").text(network.title);
			template.find(".ssid-id").text(network.title);
			var signalStrength = 'iconic-signal-strong';
			if(parseInt(network.signal)<-75){
				signalStrength = 'iconic-signal-medium';
			}else if(parseInt(network.signal)<-85){
				signalStrength = 'iconic-signal-low';
			}
			template.find(".ssid-strength").addClass(signalStrength).addClass('iconic svg-inject');
			template.removeClass('accordion-template').addClass('accordion').removeClass('hidden');
			template.appendTo('#networks');
		}
		pageInit();
		clearInterval(window.renew_interval);
	});
}
