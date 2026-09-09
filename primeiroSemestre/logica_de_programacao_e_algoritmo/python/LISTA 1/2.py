#-*- coding: UTF-8 -*-


print ("olá, blz? digite um número, se ele positivo ou igual a 0, farei a raiz quadrada e se for negativo, vou fazer o quadrado")
num = float(input("digite um número: "))
import math
if num >= 0:
    result = math.sqrt (num)
else:
    result = num **2
print(" o valor é: %.2f" %result)
