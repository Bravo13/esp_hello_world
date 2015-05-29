/*
 * AppSettings.h
 *
 *  Created on: 13 мая 2015 г.
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
	String ver;

	int load()
	{
		DynamicJsonBuffer jsonBuffer;
		int size = fileGetSize(APP_SETTINGS_FILE);
		String jsonString;
		jsonString = fileGetContent(APP_SETTINGS_FILE);
		char *chJsonString = new char[jsonString.length()+1];
		strcpy(chJsonString, jsonString.c_str());
		JsonObject& root = jsonBuffer.parseObject(chJsonString);
		if(root.containsKey("ver")){
			ver = root["ver"];

			JsonObject& network = root["network"];
			ssid = network["ssid"].toString();
			password = network["password"].toString();

			return 1;
		} else {
			return 0;
		}
	}

	void save()
	{
		DynamicJsonBuffer jsonBuffer;
		JsonObject& root = jsonBuffer.createObject();

		JsonObject& network = jsonBuffer.createObject();
		root["network"] = network;
		network["ssid"] = ssid;
		network["password"] = password;

		root["ver"] = ver;


		char buf[3048];
		root.prettyPrintTo(buf, sizeof(buf)); //TODO: add file stream writing
		fileSetContent(APP_SETTINGS_FILE, buf);
	}

	bool exist() { return fileExist(APP_SETTINGS_FILE); }
};

static ApplicationSettingsStorage AppSettings;

#endif /* INCLUDE_APPSETTINGS_H_ */
