from machine import Pin, ADC
from utime import sleep

pot = ADC(28)          # potenciômetro no pino 28
led = Pin(16, Pin.OUT) # LED no pino 20

while True:
    valor = pot.read_u16()
    print(valor)

    if valor > 30000:  # se o valor for maior que metade
        led.value(1)
    else:
        led.value(0)

    sleep(0.3)