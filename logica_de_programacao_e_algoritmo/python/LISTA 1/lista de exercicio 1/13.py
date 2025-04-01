#-*- coding: UTF-8 -*-

nota1 = float(input("digite a primeira nota: "))
nota2 = float(input("digite a segunnda nota: "))
nota3 = float(input("digite a terceira nota: "))
faltas = float(input("digite o numero de faltas: "))
media = (nota1 + nota2 + nota3) / 3
limite = 80 * 0.25
if faltas > limite:
    print ("reprovado por falta")
elif media >= 7.0:
    print ("aprovado")
else:
    print("reprovado")

