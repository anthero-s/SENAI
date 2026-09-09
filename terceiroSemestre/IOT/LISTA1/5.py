from machine import Pin, PWM, ADC
from utime import sleep

led_r = PWM(Pin(16))
led_g = PWM(Pin(17))
led_b = PWM(Pin(18))

led_r.freq(1000)
led_g.freq(1000)
led_b.freq(1000)

botao = Pin(15, Pin.IN, Pin.PULL_UP)

pot = ADC(26)

modo = 0

ultimo_estado = 1

def desligar_tudo():
    led_r.duty_u16(0)
    led_g.duty_u16(0)
    led_b.duty_u16(0)

while True:
    estado = botao.value()

    if ultimo_estado == 1 and estado == 0:
        modo = (modo + 1) % 3
        sleep(0.2) 

    ultimo_estado = estado

    brilho = pot.read_u16()

    desligar_tudo()

    if modo == 0:
        led_r.duty_u16(brilho)
    elif modo == 1:
        led_g.duty_u16(brilho)
    elif modo == 2:
        led_b.duty_u16(brilho)

    sleep(0.05)