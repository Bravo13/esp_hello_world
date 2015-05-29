#include <user_config.h>
#include <SmingCore/SmingCore.h>

#include "utils.h"
#include "AppSettings.h"

#define FIRST_RUN_PIN 4


void init()
{
	Serial.begin(115200);
	debug("Starting...");
	pinMode(FIRST_RUN_PIN, INPUT);

	if(digitalRead(FIRST_RUN_PIN) && AppSettings.load() && AppSettings.ssid.length()){
		Serial.println( os_printf("Config ver %s", AppSettings.ver.c_str()) );
		
	} else {
		AppSettings.ver = "0.1a";
		AppSettings.save();
		first_run();
	}

}
