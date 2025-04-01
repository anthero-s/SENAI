#-*- coding: UTF-8 -*-


print("digite alguma idade e eu direi a faixa etaria dela.")
idade = int(input("digite uma idade: "))
if idade < 2:
    print ("bebê")
if idade > 2 and idade <12: 
    print ("criança")
if idade >12 and idade <23:
    print ("adolescente")
if idade >23 and idade <70:
    print ("adulto")
if idade >70:
    print ("idoso")

