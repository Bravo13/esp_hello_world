/*
 * AppSettings.h
 *
 *  Created on: 13 ��� 2015 �.
 *      Author: Anakod
 */

#include <SmingCore/SmingCore.h>

#ifndef INCLUDE_APPSETTINGS_H_
#define INCLUDE_APPSETTINGS_H_

#define APP_SETTINGS_FILE "settings.conf" // leading point for security reasons :)

struct ApplicationSettingsStorage
{
	String ssid;
	String password;

	int load()
	{
		Serial.println("Loading settings");
		if(fileExist( APP_SETTINGS_FILE )){
			DynamicJsonBuffer jsonBuffer;
			int size = fileGetSize(APP_SETTINGS_FILE);
			if( !(size>0) ){
				debugf("Settings file size le 0");
				return 0;
			}
			char *chJsonString = new char[size+1];
			// FIXME chJsonString contains file name, not file content
			debugf("JSON CONFIG %s", chJsonString);
			fileGetContent(APP_SETTINGS_FILE, chJsonString, size);
			JsonObject& root = jsonBuffer.parseObject(chJsonString);

			JsonObject& network = root["network"];
			ssid = network["ssid"];
			password = network["password"];

			if( !ssid ){
				debugf("SSID is empty");
				return 0;
			}

			return 1;
		} else {
			debugf("Settings file not exists");
			return 0;
		}
	}

	void save()
	{
		debugf("Saving config");
		DynamicJsonBuffer jsonBuffer;
		JsonObject& root = jsonBuffer.createObject();

		JsonObject& network = jsonBuffer.createObject();
		root["network"] = network;
		network["ssid"] = ssid.c_str();
		network["password"] = password.c_str();

		char buf[3048];
		root.prettyPrintTo(buf, sizeof(buf)); //TODO: add file stream writing
		Serial.println(buf);
		fileSetContent(APP_SETTINGS_FILE, buf);
	}

	bool exist() { return fileExist(APP_SETTINGS_FILE); }
};

static ApplicationSettingsStorage AppSettings;

#endif /* INCLUDE_APPSETTINGS_H_ */
