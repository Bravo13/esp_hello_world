#include <user_config.h>
#include <SmingCore/SmingCore.h>

#include "utils.h"
#define FIRST_RUN_PIN 4

DynamicJsonBuffer jsonBuffer;
JsonObject& config = jsonBuffer.createObject();

void init()
{
	Serial.begin(115200);
//	SystemClock.setTimezone(2);
//	SystemClock.setNtpSync("ntp1.stratum2.ru", 1000);
	debug("Starting...");
	pinMode(FIRST_RUN_PIN, INPUT);

	if(digitalRead(FIRST_RUN_PIN) && get_config(config)){
		config["test"] = "test";
		config.printTo(Serial);
// connect to wifi
	} else {
// Find networks
		first_run();
		config["data"] = "data";
		set_config(config);
	}

}
