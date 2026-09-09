r = PWM(Pin(16))
g = PWM(Pin(17))
b = PWM(Pin(18))

r.freq(1000)
g.freq(1000)
b.freq(1000)

pot = ADC(28)

while True:
    valor = pot.read_u16()
    r.duty_u16(valor)
    g.duty_u16(0)
    b.duty_u16(0)
    sleep(0.01)