#include "osapi.h"
#include "c_types.h"

#include "user_config.h"
#include "init.h"
#include "utils.h"
#include "flash.h"

void ICACHE_FLASH_ATTR user_init() {
	print_sys_info();
	char *setup_done = 0;
	int wifi_mode = 0x1;
	flash_key_value_get("setup_done", setup_done);
	init_wifi( wifi_mode );
}
