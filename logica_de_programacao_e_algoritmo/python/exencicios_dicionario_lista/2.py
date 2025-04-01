print("olá, blz? esse programa irá ler um vetor de 10 número reais e mostrar na tela.")


numeros = []

for i in range (10):
    num = float(input(f"digite {i+1}° número: "))
    numeros.append(num)
    inverso = numeros[::inverso]

print(f"os números digitados foram: {inverso}")
