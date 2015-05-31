/*
 * utils.cpp
 *
 *  Created on: 23 мая 2015 г.
 *      Author: Bravo13
 */
#include <SmingCore/SmingCore.h>
#include <osapi.h>

int scanStatus = 0;
BssList networks;
HttpServer server;

void debug( const char *msg ) {
	Serial.println( os_printf("[ %d ] - %s", 1, msg));
}

void networkScanCompleted(bool succeeded, BssList list)
{
	if (succeeded) {
		for (int i = 0; i < list.count(); i++)
			if (!list[i].hidden && list[i].ssid.length() > 0)
				networks.add(list[i]);
		scanStatus = 2;
	}
	networks.sort([](const BssInfo& a, const BssInfo& b){ return b.rssi - a.rssi; } );
}

void web_cb_index(HttpRequest &request, HttpResponse &response) {
	TemplateFileStream *tmpl = new TemplateFileStream("index.tpl");
	auto &vars = tmpl->variables();
	response.sendTemplate(tmpl); // will be automatically deleted	
}

void web_cb_connect(HttpRequest &request, HttpResponse &response) {
}

void web_cb_scan_status(HttpRequest &request, HttpResponse &response) {
	JsonObjectStream* stream = new JsonObjectStream();
	JsonObject& json = stream->getRoot();
	JsonArray& netlist = json.createNestedArray("available");
	for (int i = 0; i < networks.count(); i++) {
		JsonObject &item = netlist.createNestedObject();
		item.add("id", (int)networks[i].getHashId());
		item.add("title", networks[i].ssid);
		item.add("signal", networks[i].rssi);
		item.add("encryption", networks[i].getAuthorizationMethodName());
	}

	response.setAllowCrossDomainOrigin("*");
	response.sendJsonObject(stream);
}

void web_cb_start_scan(HttpRequest &request, HttpResponse &response) {
	debug("Running scan of networks");
	WifiStation.startScan(networkScanCompleted);
	JsonObjectStream* stream = new JsonObjectStream();
	JsonObject& json = stream->getRoot();
	json["scanning"] = 1;
	response.setAllowCrossDomainOrigin("*");
	response.sendJsonObject(stream);
	scanStatus = 1;
}

void onFile(HttpRequest &request, HttpResponse &response)
{
	String file = request.getPath();
	if (file[0] == '/')
		file = file.substring(1);

	if (file[0] == '.')
		response.forbidden();
	else {
		response.setCache(86400, true); // It's important to use cache for better performance.
		response.sendFile(file);
		Serial.println(file);
	}
}

void first_run() {
	WifiAccessPoint.config("Sming Configuration", "", AUTH_OPEN);
	WifiAccessPoint.enable(true);

	server.listen(80);
	server.addPath("/", web_cb_index);
	server.addPath("/scan", web_cb_start_scan);
	server.addPath("/scanStatus", web_cb_scan_status);
	server.addPath("/connect", web_cb_connect);
	server.setDefaultHandler(onFile);

	debug("Access point ready to scan");
}


//void init_time() {
//	ntpcp = new NtpClient("pool.ntp.org",30, NtpClientResultCallback (&ntpClientDemo::ntpResult, this));
//}
