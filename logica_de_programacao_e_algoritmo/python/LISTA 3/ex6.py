print("olá, blz? esse programa irá converter grau celsius para Fahrenheit. ")
resp = str(input("""digite "c" para celsius ou "F" para fahrenheit"""))

graus =int(input("digite um número em graus: "))

def celsius ():
    if resp == "c":
        resposta = graus * 9/5 + 32
        print(resposta)
    elif resp == "F":
        resposta = graus * 9/5 - 32
        print (resposta)
celsius()
print()
