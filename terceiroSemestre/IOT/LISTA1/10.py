from machine import Pin, PWM, ADC
from utime import sleep

led_vermelho = PWM(Pin(13))
led_verde = PWM(Pin(14))
led_azul = PWM(Pin(15))

led_vermelho.freq(1000)
led_verde.freq(1000)
led_azul.freq(1000)

potenciometro = ADC(26)

btn_cor = Pin(16, Pin.IN, Pin.PULL_DOWN)
btn_efeito = Pin(17, Pin.IN, Pin.PULL_DOWN)

modo_cor = 0
modo_efeito = 0

estado_cor_ant = 0
estado_efeito_ant = 0

pisca_ligado = True

def limitar(valor, minimo=0, maximo=65535):
    return max(min(valor, maximo), minimo)

while True:
    estado_cor = btn_cor.value()
    estado_efeito = btn_efeito.value()

    if estado_cor == 1 and estado_cor_ant == 0:
        modo_cor = (modo_cor + 1) % 3

    if estado_efeito == 1 and estado_efeito_ant == 0:
        modo_efeito = (modo_efeito + 1) % 2

    estado_cor_ant = estado_cor
    estado_efeito_ant = estado_efeito

    intensidade = limitar(potenciometro.read_u16())

    if modo_efeito == 1:
        pisca_ligado = not pisca_ligado
        if not pisca_ligado:
            intensidade = 0

    led_vermelho.duty_u16(intensidade if modo_cor == 0 else 0)
    led_verde.duty_u16(intensidade if modo_cor == 1 else 0)
    led_azul.duty_u16(intensidade if modo_cor == 2 else 0)

    sleep(0.15)