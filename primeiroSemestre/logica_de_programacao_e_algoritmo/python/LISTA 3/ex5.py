print("olá, blz? esse prgrama irá falar se tal número é primo ou não.")

def cont(n):
    if n < 1:
        return f"esse number não é primo"
    for v in range(2,n):
        if n % v == 0:
            return f"não é primo"
    return f"esse number é primo"
n = int(input("Digite um número: "))
print(cont(n))
