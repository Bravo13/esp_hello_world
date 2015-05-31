<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="libs.css">
		<link rel="stylesheet" href="app.css">
		<script src="libs.js"></script>
		<script src="app.js"></script>
		<title>{title}</title>
	</head>
	<body>
		<div class="grid" id="content">
			<div class="row cells3">
				<div class="cell"></div>
				<div class="cell" id="networks">
				GETTING_NETWORKS_LIST
				</div>
				<div class="cell"></div>
			</div>
		</div>
		<div class="accordion-template hidden" data-close-any="true">
			<div class="frame">
				<div class="heading">
					<span class="ssid-name">{ssid}</span>
					<img class="ssid-strength" src="signal.svg" class="" />
				</div>
				<div class="content">
					<form action="/connect">
						<div class="input-control modern text iconic">
							<input type="text">
							<span class="placeholder">Input login</span>
							<span class="icon mif-user"></span>
						</div>
						<div class="input-control modern password iconic" data-role="input">
							<input type="password">
							<span class="placeholder">Input password</span>
							<span class="icon mif-lock"></span>
							<button class="button helper-button reveal"><span class="mif-looks"></span></button>
						</div>
						<div class="input-control modern">
							<button class="button primary">Connect</button>
						</div>
						<input type="hidden" name="selected" value="0">
						<input type="hidden" name="ssid" value="{ssid}">
					</form>
				</div>
			</div>
		</div>
	</body>
</html>
