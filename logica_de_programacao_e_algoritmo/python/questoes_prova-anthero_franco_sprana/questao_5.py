print("olá,blz? esse programa irá ver se seu salário merece um bonus de 10 porcento ou 15 porcento")


salario = float(input("digite o seu salário: "))
porcento = (salario * 15) / 100
porcento2 = (salario * 10) / 100
if salario < 1500:
    print(f" seu salário teve um aumento de {porcento} reais com 15 porcento!.")
elif salario > 1500:
    print(f" seu salário teve um aumento de {porcento2} reais com 10 porcento!.")
