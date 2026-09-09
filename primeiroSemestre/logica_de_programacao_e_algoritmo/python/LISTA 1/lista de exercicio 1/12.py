#-*- coding: UTF-8 -*-

a = int(input("digite o primeiro número: "))
b = int(input("digite o segundo número: "))
if a > b:
    a, b = b, a ("troca os valores por favor")
print (f"valores em ordem crescente: {a}, {b}")
