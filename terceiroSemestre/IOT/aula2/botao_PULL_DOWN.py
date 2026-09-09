from machine import Pin
from utime import sleep

botao_down = Pin(14, Pin.IN)

while True:
    leitura_botao = botao_down.value()
    
    if leitura_botao == 1:
        print("O botão foi pressionado!(EStado: HIGH)")
        print(leitura_botao)
    else:
        print("O botão não foi pressionado! (Estado: LOW)")
        print(leitura_botao)
        
    sleep(0.5)