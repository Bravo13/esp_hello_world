#include "driver.h"
#include "utils.h"

#include <SmingCore/SmingCore.h>

int driver_task = 0;
Timer procTimer;

void driver_init(){
	debug("Driver init");
	pinMode( F_PIN, OUTPUT );
	pinMode( B_PIN, OUTPUT );
	driver_stop();
}

void driver_fw(){
	debug("Driver fw");
	digitalWrite( F_PIN, false );
}

void driver_bw(){
	debug("Driver bw");
	digitalWrite( B_PIN, false );
}

void driver_stop(){
	debug("Driver stop");
	digitalWrite( F_PIN, true );
	digitalWrite( B_PIN, true );
}

void driver_check_pos() {
	if( abs(driver_task - driver_pos()) > E ) return;
	procTimer.stop();
	driver_stop();
}

void driver_set_pos( int pos ){
	int curr_pos = driver_pos();
	if( abs(pos - curr_pos) <= E ) return;
	driver_task = pos;
	if(pos - curr_pos < 0) {
		driver_fw();
	} else {
		driver_bw();
	}
	procTimer.initializeMs( CHECK_MS, driver_check_pos).start();
}

int driver_pos( int pos ){
	if ( pos > -1 ){
		driver_set_pos( pos );
	}
	return analogRead( POS_PIN );
}
