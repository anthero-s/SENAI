from machine import Pin
from utime import sleep, ticks_ms 



botao1 = Pin(3, Pin.IN, Pin.PULL_DOWN)
botao2 = Pin(4, Pin.IN, Pin.PULL_DOWN) 
led_cor1 = Pin (5,Pin.OUT)
led_cor2 = Pin(6,Pin.OUT)
estado_led = 0



led_cor1.value(estado_led)

led_cor2.value(estado_led)
(estado_led)
 

clique1 = 0    
clique2 = 0    
intervalo = 200 


while True:
    tempo_atual = ticks_ms() 
    interruptor_acionado = (0) 


    if botao1.value() == 1 and (tempo_atual - clique1) > intervalo:
        clique1 = tempo_atual  
        interruptor_acionado = (1) 
        led_cor2.value(0)
           
      
    
    if botao2.value() == 1 and (tempo_atual - clique2) > intervalo:
        clique2 = tempo_atual  
        interruptor_acionado = (1)  
        led_cor2.value(1)
           

    
    if interruptor_acionado:
        
        
        if estado_led:
            print("mudando de cor")
        else:
            print("mudando de cor")

    sleep(0.001)
