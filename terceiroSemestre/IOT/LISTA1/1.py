from machine import Pin
from utime import sleep

botao_up = Pin(15, Pin.IN, Pin.PULL_DOWN)
led = Pin(16, Pin.OUT)

while True:
    leitura_botao = botao_up.value()
   
    if leitura_botao == 1:
        print("LED desligado!")
        led.value(0)   
    else:
        print("LED ligado!")
        led.value(1)   
   
    sleep(0.1)