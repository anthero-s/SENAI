# -*- coding: UTF-8 -*-

print("""olá blz? digite a idade e  irei imprimir: Total de pessoas com menos de
21 anos. Total de pessoas com mais de 50 anos. O programa termina quando idade
for = -99.""")

m = 0
n = 0

while True:
    num = int(input("digite a idade: "))
    if num == -99:
        print (f"você escolheu sair.")
        break
    elif num < 21:
        n += 1
    elif num > 50:
        m += 1

print (f"o total de pessoas com menos de 21 anos é: {n}")
print (f"o total de pessoas com mais de 50 é: {m}")
    

