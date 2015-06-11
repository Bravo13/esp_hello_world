/*
 * utils.cpp
 *
 *  Created on: 23 ��� 2015 �.
 *      Author: Bravo13
 */
#include <SmingCore/SmingCore.h>
#include <osapi.h>
#include "driver.h"

int scanStatus = 0;
BssList networks;
HttpServer server;
FTPServer ftp;

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
		item.add("title", networks[i].ssid.c_str());
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

void web_cb_driver_pos(HttpRequest &request, HttpResponse &response) {
	debug("Driver pos command");
	JsonObjectStream* stream = new JsonObjectStream();
	JsonObject& json = stream->getRoot();
	json["pos"] = driver_pos();
	response.setAllowCrossDomainOrigin("*");
	response.sendJsonObject(stream);
	scanStatus = 1;
}

void web_cb_driver_forward(HttpRequest &request, HttpResponse &response) {
	debug("Driver forward command");
	JsonObjectStream* stream = new JsonObjectStream();
	JsonObject& json = stream->getRoot();
	json["forward"] = 1;
	driver_stop();
	driver_fw();
	response.setAllowCrossDomainOrigin("*");
	response.sendJsonObject(stream);
	scanStatus = 1;
}

void web_cb_driver_backward(HttpRequest &request, HttpResponse &response) {
	debug("Driver backward command");
	JsonObjectStream* stream = new JsonObjectStream();
	JsonObject& json = stream->getRoot();
	json["backward"] = 1;
	driver_stop();
	driver_bw();
	response.setAllowCrossDomainOrigin("*");
	response.sendJsonObject(stream);
	scanStatus = 1;
}

void web_cb_driver_stop(HttpRequest &request, HttpResponse &response) {
	debug("Driver stop command");
	JsonObjectStream* stream = new JsonObjectStream();
	JsonObject& json = stream->getRoot();
	json["stop"] = 1;
	driver_stop();
	response.setAllowCrossDomainOrigin("*");
	response.sendJsonObject(stream);
	scanStatus = 1;
}

void web_cb_driver_setpos(HttpRequest &request, HttpResponse &response) {
	int curr_pos = driver_pos();
	int pos = request.getQueryParameter("pos").toInt();
	Serial.println( os_printf("Driver setpos %d command", pos) );
	JsonObjectStream* stream = new JsonObjectStream();
	JsonObject& json = stream->getRoot();
	driver_stop();
	driver_set_pos( pos );
	response.setAllowCrossDomainOrigin("*");
	response.sendJsonObject(stream);
	scanStatus = 1;
}

void web_run() {
	server.listen(80);
	server.addPath("/driver/pos", web_cb_driver_pos);
	server.addPath("/driver/setpos", web_cb_driver_setpos);
	server.addPath("/driver/forward", web_cb_driver_forward);
	server.addPath("/driver/backward", web_cb_driver_backward);
	server.addPath("/driver/stop", web_cb_driver_stop);
	server.addPath("/scan", web_cb_start_scan);
	server.addPath("/scanStatus", web_cb_scan_status);
	server.addPath("/connect", web_cb_connect);
	server.setDefaultHandler(onFile);
}

void first_run() {
	WifiAccessPoint.config("Sming Configuration", "", AUTH_OPEN);
	WifiAccessPoint.enable(true);
	debug("Access point ready to scan");
}


//void init_time() {
//	ntpcp = new NtpClient("pool.ntp.org",30, NtpClientResultCallback (&ntpClientDemo::ntpResult, this));
//}
