from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(28)
led = PWM(Pin(16))
led.freq(1000)

led.duty_u16(0)

while True:
    #Variável valor guardado o valor real do potenciometro
    valor = potenciometro.read_u16()
    print("Valor original: ", valor)
    sleep(0.5)
   
    #Convertendo a leitura ADC para porcentagem %
    porcentagem_valor = int((valor * 100) / 65535)
   
    print("Valor porcentagem: ", porcentagem_valor)
    led.duty_u16(valor)
    sleep(0.3)