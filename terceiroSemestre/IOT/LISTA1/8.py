from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(16))
led.freq(1000)

botao = Pin(15, Pin.IN, Pin.PULL_UP)

ligado = False

travado = False

def fade_in():
    for i in range(0, 65535, 1000):
        led.duty_u16(i)
        sleep(0.01)

def fade_out():
    for i in range(65535, 0, -1000):
        led.duty_u16(i)
        sleep(0.01)

while True:

    if botao.value() == 0 and not travado:
        ligado = not ligado

        if ligado:
            fade_in()
        else:
            fade_out()

        travado = True

    if botao.value() == 1:
        travado = False

    sleep(0.05)