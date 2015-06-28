/*
 * utils.h
 *
 *  Created on: 23 мая 2015 г.
 *      Author: Bravo13
 */

#ifndef INCLUDE_UTILS_H_
#define INCLUDE_UTILS_H_
#include <SmingCore/SmingCore.h>

#define UDP_PORT 5151


void debug(const char *msg);
void first_run();
void web_run();
void web_cb_index(HttpRequest, HttpResponse);
void web_cb_connect(HttpRequest, HttpResponse);
void web_cb_scan_status(HttpRequest, HttpResponse);
void web_cb_start_scan(HttpRequest, HttpResponse);
void udp_recieve(UdpConnection& connection, char *data, int size, IPAddress remoteIP, uint16_t remotePort);
void on_wifi_connected();



#endif /* INCLUDE_UTILS_H_ */
