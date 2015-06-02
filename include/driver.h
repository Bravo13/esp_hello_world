#ifndef INCLUDE_DRIVER_H_
#define INCLUDE_DRIVER_H

#define F_PIN 13
#define B_PIN 12
#define POS_PIN 0
#define E 30
#define CHECK_MS 1

void driver_init();

void driver_fw();
void driver_bw();
void driver_stop();

void driver_set_pos( int );

int driver_pos( int pos = -1 );

#endif
