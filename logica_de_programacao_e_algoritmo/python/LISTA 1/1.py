#-*- coding: UTF-8 -*-

print ("olá, digite dois numeros que eu farei uma soma e se for maior que 20, eu somarei a 8, se for menor, subtrarei a 5.")

num = float(input("digite um numero: "))
num2 = float(input("digite mais um numero:"))
soma = num + num2
adicao = soma + 8
subtracao = soma -5

if soma > 20:
    print (f" o resultado foi {soma}, e somando mais 8 fica: {adicao}")
if soma < 20:
    print (f" o resultado foi {soma}, e subtraindo a 5 fica: {subtracao}")
