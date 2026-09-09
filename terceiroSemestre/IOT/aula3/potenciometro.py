from machine import Pin, ADC
from utime import sleep

pot = ADC(28)

while True:
    valor = pot.read_u16()
    print(valor)
    sleep(0.3)