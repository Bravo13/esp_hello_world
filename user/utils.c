#include "c_types.h"
#include "osapi.h"

void ICACHE_FLASH_ATTR debug( char* msg ) {
	os_printf("[ TIME_HERE ] %s", msg);
}

void ICACHE_FLASH_ATTR print_sys_info( void ) {
	int freq = system_get_cpu_freq();
	int chip_id = system_get_chip_id();

	os_printf("CHIP : %d | FREQ: %d MHz", chip_id, freq);
}
