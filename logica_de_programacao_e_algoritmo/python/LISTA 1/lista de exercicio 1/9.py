#-*- coding: UTF-8 -*-


print ("olá, me informe seu peso e sua altura eu eu direi se você esta com o peso adquado")
peso = float(input("digite seu peso: "))
altura = float(input("digite a sua altura: "))
IMC = peso / (altura ** 2)
if IMC <0:
    print("ivalido, tente novamente")
elif IMC <20 and IMC <=25:
    print("abaixo do peso")
elif IMC >=20 and IMC <=30:
    print("adquado")
elif IMC >=25 and IMC <=40:
    print ("obeso")
else:
    print("imenso")
