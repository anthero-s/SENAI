from machine import Pin
from utime import sleep, ticks_ms 



botao1 = Pin(3, Pin.IN, Pin.PULL_DOWN)
botao2 = Pin(4, Pin.IN, Pin.PULL_DOWN) 
led = Pin(2, Pin.OUT)   


estado_led = (0)      
led.value(estado_led)   

clique1 = 0    
clique2 = 0    
intervalo = 200 


while True:
    tempo_atual = ticks_ms() 
    interruptor_acionado = (0) 


    if botao1.value() == 1 and (tempo_atual - clique1) > intervalo:
        clique1 = tempo_atual  
        interruptor_acionado = (1)       

    
    if botao2.value() == 1 and (tempo_atual - clique2) > intervalo:
        clique2 = tempo_atual  
        interruptor_acionado = (1)     

    
    if interruptor_acionado:
        estado_led = not estado_led  
        led.value(estado_led)        
        
        if estado_led:
            print("lâmpada ligada")
        else:
            print("lâmpada desligada")

    sleep(0.001)
