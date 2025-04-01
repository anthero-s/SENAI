print("ola, blz? esse programa irá falar se o primeiro número é multiplo do segundo")

num = int(input("digite o primeiro número: "))
num2 = int (input("digite o segundo número: "))

def multiplos ():
    if num % num2 == 0:  
        print(f"O número {num} é múltiplo de {num2}.")
    else:
        print(f"O número {num} não é múltiplo de {num2}.")
multiplos ()
