prestacao = float(input("digite o valor da prestação: "))
salario = float(input("digite seu salário"))
if prestacao > salario * 0.3:
    print("infelizmente voce não pode efetuar o emprestimo")
else:
    print(f"o valor da prestação é{prestacao} reais!")
                
