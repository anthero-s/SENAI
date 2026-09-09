print("olá, blz? esse programa irá receber três lados de um triângulo e informar se ele é equilátero ou não")


num = int(input("digite um número: "))
num2 = int(input("digite outro número: "))
num3 = int(input("digite outro número: "))
if num == num2 and num2 == num3 and num3 == num:
    print("Equilátero.")
else:
        print("Não é equilátero.")
