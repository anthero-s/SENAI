print ("""olá, blz?  esse progrma irá receber um número e classificar se: é menor
que 10, entre 10 ou 20, ou maior que 20.""")
num = int(input("digite um número: "))
if num < 10:
    print(f"{num} é menor que 10.")
elif num > 10 and num < 20:
        print(f"{num} esta entre 10 e 20.")
elif num > 20:
    print(f"{num} é maior que 20.")
