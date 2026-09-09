# -*- coding: UTF-8 -*-

print("""olá blz? esse programa irá receber valores e no final irá imprimir o maior e o menor,
digite um número negativo e o programa encerrará.""")
m = 0
n = 0

while True:
    num = float(input("digite o valor: "))
    if num < 0:
        print("você escolheu sair")
        print(f"o maior número é {n}")
        print (f" o menor número é {m}")
        break
    elif n == 0 or num > n:
        n = num
    elif m ==0 or n > m:
        m = num
