#-*- coding: UTF-8 -*-

print ("olá, esse programa irá dizer a temperatura para você!")
temperatura = int(input("digite a temperatura: "))
if temperatura <=15:
    print ("muito frio")
elif temperatura >=16 and temperatura <23:
    print ("frio")
elif temperatura >=23 and temperatura <26:
    print ("agradável")
elif temperatura >=26 and temperatura <30:
    print ("calor")
if temperatura >=31:
    print ("muito quente")
