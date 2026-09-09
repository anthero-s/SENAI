#-*- coding: UTF-8 -*-

fatorial = 1
print ("olá, esse programa irá apresentar o fatorial de de qualquer número.")
num = int(input("digite o número: "))
result = 1
for i in range ( 1, num + 1):
    fatorial = fatorial * i
print (f" o fatorial de {num} é {fatorial}.")
    
