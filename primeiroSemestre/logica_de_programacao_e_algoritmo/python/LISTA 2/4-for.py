#-*- coding: UTF-8 -*-

print ("olá, esse programa irá apresenta os números divisores digitado.")
num = int(input("digite um número: "))
for i in range (1, num):
    if num % i == 0:
        print (i)
                
