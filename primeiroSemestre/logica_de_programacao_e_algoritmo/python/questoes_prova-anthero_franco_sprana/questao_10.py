print("olá, blz? esse programa irá ver se você vai pagar uma taxa de serviço de um restaurante de 10 porcento ou 8 porcento>")

num = int(input("digite o valor da conta do restaurante: "))
taxa = (num * 8) / 100
if num > 200:
    print(f" você pagou {taxa} reais de taxa.")
taxa2 = (num * 10) / 100
if num < 200:
    print(f" você pagou {taxa2} reais de taxa.")
