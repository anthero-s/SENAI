#-*- coding: UTF-8 -*-
print ("escreva um numero inteiro e eu lhe direi se ele é multiplo de 3 ou não.")
num = int(input("digite o numero: "))
if num % 3 == 0:
    print(f" {num} é o multiplo de tres.")
else:
    print (f" {num} não é o multiplo de tres.")
