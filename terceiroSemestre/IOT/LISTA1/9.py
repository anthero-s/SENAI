from machine import Pin, PWM, ADC
from utime import sleep

led_vermelho = PWM(Pin(13))
led_azul = PWM(Pin(15))

led_vermelho.freq(1000)
led_azul.freq(1000)

potenciometro = ADC(26)

def limitar(valor, minimo=1000, maximo=64535):
    return max(min(valor, maximo), minimo)

while True:
    leitura = potenciometro.read_u16()

    leitura_ajustada = limitar(leitura)

    led_azul.duty_u16(leitura_ajustada)

    led_vermelho.duty_u16(65535 - leitura_ajustada)

    sleep(0.1)