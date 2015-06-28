#include <user_config.h>
#include <SmingCore/SmingCore.h>

#include "utils.h"
#include "driver.h"
#include "AppSettings.h"

#define FIRST_RUN_PIN 4


void init()
{
	Serial.begin(115200);
	debug("Starting...");
	pinMode(FIRST_RUN_PIN, INPUT);

	web_run();
	if(digitalRead(FIRST_RUN_PIN) && AppSettings.load()){
		debugf("SSID:%s PASS:%s", AppSettings.ssid.c_str(), AppSettings.password.c_str());
		WifiStation.config(AppSettings.ssid.c_str(), AppSettings.password.c_str());
		WifiStation.waitConnection(on_wifi_connected);
		driver_init();
	} else {
		first_run();
	}

}
