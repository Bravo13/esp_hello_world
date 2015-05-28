/*
 * utils.cpp
 *
 *  Created on: 23 мая 2015 г.
 *      Author: Bravo13
 */
#include <SmingCore/SmingCore.h>
#include <osapi.h>

void debug( const char *msg ) {
	Serial.println( os_printf("[ %d ] - %s", 1, msg));
}

int get_config( JsonObject& jsonp) {
	debug("Retrieving config");
	String conf = fileGetContent("config.json");
	if( conf.length() > 0 ){
		DynamicJsonBuffer jsonBuffer;
		char *ch_conf = new char[conf.length()+1];
		strcpy(ch_conf, conf.c_str());
		JsonObject& json = jsonBuffer.parseObject(ch_conf);
		debug("Retrieving config - ok");
		return 1;
	} else {
		debug("Retrieving config failed");
		return 0;
	}
}

int set_config( JsonObject& jsonp ){
	debug("Saving config...");
	String conf;
	char config[256];
	jsonp.printTo(config, sizeof(config));
	fileSetContent("config.json", config);
}

void first_run() {
	WifiAccessPoint.enable(true);
	WifiAccessPoint.setIP(IPAddress(192, 168, 100, 1));
	debug("Access point ready to scan");


}
