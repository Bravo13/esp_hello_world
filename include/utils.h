/*
 * utils.h
 *
 *  Created on: 23 мая 2015 г.
 *      Author: Bravo13
 */

#ifndef INCLUDE_UTILS_H_
#define INCLUDE_UTILS_H_


void debug(const char *msg);
void first_run();
void web_cb_index(HttpRequest &request, HttpResponse &response);
void web_cb_connect(HttpRequest &request, HttpResponse &response);
void web_cb_scan_status(HttpRequest &request, HttpResponse &response);
void web_cb_start_scan(HttpRequest &request, HttpResponse &response);



#endif /* INCLUDE_UTILS_H_ */
