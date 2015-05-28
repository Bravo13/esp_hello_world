/*
 * utils.h
 *
 *  Created on: 23 мая 2015 г.
 *      Author: Bravo13
 */

#ifndef INCLUDE_UTILS_H_
#define INCLUDE_UTILS_H_


void debug(const char *msg);
int get_config(JsonObject& jsonp);
int set_config( JsonObject& jsonp );
void first_run();



#endif /* INCLUDE_UTILS_H_ */
