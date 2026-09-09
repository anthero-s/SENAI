from machine import Pin, ADC
from utime import sleep

led = Pin(16, Pin.OUT)
pot = ADC(28)

while True:
    valor = pot.read_u16()
    tempo = 0.05 + (valor / 65535) * 0.5

    led.value(1)
    sleep(tempo)

    led.value(0)
    sleep(tempo)