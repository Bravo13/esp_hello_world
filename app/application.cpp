#include <user_config.h>
#include <SmingCore/SmingCore.h>

#include "utils.h"
#include "driver.h"
#include "AppSettings.h"

#define FIRST_RUN_PIN 4


void init()
{
	Serial.begin(115200);
	Serial.println("Hello!");
	debug("Starting...");
	pinMode(FIRST_RUN_PIN, INPUT);

	web_run();
	if(digitalRead(FIRST_RUN_PIN) && AppSettings.load()){
		Serial.println( os_printf("Config ver %s", AppSettings.ver.c_str()) );
		driver_init();
	} else {
		AppSettings.ver = "0.1a";
		AppSettings.save();
		first_run();
	}

}
