print ("olá, blz? esse programa irá ler um vetor de 5 números inteiros e mostrar na tela.")

numeros = []


for i in range(5):
    num = int(input(f"Digite o {i==0} número: "))
    numeros.append(num)

print(f"Os números digitados foram: {numeros}")

