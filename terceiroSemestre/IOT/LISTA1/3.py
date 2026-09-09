from machine import Pin, ADC
from utime import sleep

pot = ADC(28)          
led = Pin(16, Pin.OUT) 

while True:
    valor = pot.read_u16()
    print(valor)

    if valor > 30000:  
        led.value(1)
    else:
        led.value(0)

    sleep(0.3)