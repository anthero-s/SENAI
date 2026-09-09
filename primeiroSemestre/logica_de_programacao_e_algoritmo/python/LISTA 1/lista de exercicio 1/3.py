#-*- coding: UTF-8 -*-

print ("olá, digite um número e eu falarei se o numero é impar ou par")
num = int(input("digite um número"))
if num % 2 == 1:
    print (f"o número {num} é impar")
if num % 2 == 0:
    print (f"o número {num} é par")
