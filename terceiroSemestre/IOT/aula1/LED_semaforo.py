from machine import Pin
from utime import sleep

sleep(0.5)
ledgre = Pin(16, Pin.OUT)
ledyel = Pin(17, Pin.OUT)
ledred = Pin(18, Pin.OUT)

def semaforo():
    global ledgre, ledgre, ledyel
    ledgre.value(1)
    sleep(2)
    ledyel.value(1)
    ledgre.value(0)
    sleep(0.5)
    ledred.value(1)
    ledyel.value(0)
    sleep(2)
    ledred.value(0)
while True:
    semaforo()