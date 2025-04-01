#-*- coding: UTF-8 -*-

print ("digite o número de horas trabalhadas eu eu direi o seu sálario líquido")
hrs = int(input("digite a quantidades de horas trabalhadas: "))
total = hrs * 19.50
if hrs <=0:
    print("invalido, tente novamente!")
elif total >1500.00:
    result = total * 0.10
    print(f"o seu salário é de: {result}")
else:
    result = total
    print (f1"o seu salário liquido é de: {result}")
