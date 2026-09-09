from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(16))
led.freq(1000)

botao_up = Pin(15, Pin.IN, Pin.PULL_UP)
botao_down = Pin(17, Pin.IN, Pin.PULL_UP)

brilho = 0

passo = 6553  

travado_up = False
travado_down = False

while True:

    if botao_up.value() == 0 and not travado_up:
        brilho += passo
        if brilho > 65535:
            brilho = 65535
        travado_up = True

    if botao_up.value() == 1:
        travado_up = False

    if botao_down.value() == 0 and not travado_down:
        brilho -= passo
        if brilho < 0:
            brilho = 0
        travado_down = True

    if botao_down.value() == 1:
        travado_down = False

    led.duty_u16(brilho)

    sleep(0.05)