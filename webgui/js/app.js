$(document).ready( function(){
	$('.svg-inject').svgInject();
	$(".accordion").accordion({
		onFrameOpened:function(){
			console.log(arguments)
		},
	});
});

function renew_networks_list_start() {
	$.get('/scan', function(data){
		window.renew_interval = setInterval(renew_networks_list_status, 2000);
		console.log(data);
	})
}

function renew_networks_list_status() {
	$.get('/scanStatus', function(data){
		console.log(data);
	});
}
