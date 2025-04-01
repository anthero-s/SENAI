#-*- coding: UTF-8 -*-


print("olá, irei escrever um algoritmo que irá ler dois numeros inteiros A e B e escrever se é inteiro!")
a = int(input("escreva o número: "))
b = int(input("escreva outro número: "))
if a % b == 0:
    print (f" {a} e {b} é divisivel")
else:
    print (f" {a} e {b} não é divisivel")
