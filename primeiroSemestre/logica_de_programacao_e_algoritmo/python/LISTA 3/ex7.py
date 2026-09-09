
print("Olá blz? Irei calcular contas simples para vc")


def luffyonepiece ():
    resp = input("""Digite '+' para adição e "-" para a subtração, "/" para divisão
e "*" para multiplicação.""")
    valor1 = int(input("digite o valor"))
    valor2 = int(input("digite o valor"))
    if resp == "+":
            result = valor1 + valor2
            print(f"o resultado da operação é: {result} ")
    elif resp == "-":
        result = valor1 - valor2
        print (f"o resultado da operação é: {result} ")
    elif resp == "/":
        result = valor1 / valor2
        print (f"o resultado da operação é: {result} ")
    elif resp == "*":
        result = valor1 * valor2
        print (f"o resultado da operação é: {result} ")
luffyonepiece()
                
        
        


