print("olá, blz? esse programa irá ler a altura e o raio de um cilindro e imprimir o volume do mesmo.")


import math
altura = float(input("digite a altura: "))
raio = float(input("digite o raio do cilindro: "))
def calcular(raio, altura):
    area = raio / (2 * math.pi * altura)
    print(f"o volume do cilindro é:{area:.2f}")

calcular(raio, altura)
