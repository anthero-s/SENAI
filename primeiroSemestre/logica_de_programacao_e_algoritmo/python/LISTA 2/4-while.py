# -*- coding: UTF-8 -*-

print ("""esse programa irá ler vários inteiros positivos e mostrará, no final, a soma
dos números pares e a soma dos números ímpares. O programa encerrará quando entrar
um número maior que 1000.""")
m = 0
n = 0
while True:
    num = int(input("digite o número"))
    if num > 1000:
        print ("você escolheu sair.")
        break
    
    if num % 2 == 0:
        n = num + n
    elif num % 2 != 0:
        m = num + m
        print(f"a soma dos números ímpares é: {m}")
        print(f"a soma dos números pares é: {n}")
