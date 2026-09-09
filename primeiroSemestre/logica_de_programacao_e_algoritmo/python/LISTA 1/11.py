#-*- coding: UTF-8 -*-


print (""" Numa faculdade, os alunos com média maior ou igual a 7,0 são aprovados,
 aqueles  com média inferior a 3,0 são reprovados e os demais ficam de recuperação. Dadas as duas  notas de um aluno, informe sua situação.

 """)
nota = float(input("digite sua nota"))
nota2 = float(input("digite sua nota"))
media = nota + nota2 / 2
if media >= 7:
    print(" voce foi aprovado!")
elif media <3:
    print ("voce foi reprovado!")
else:
    print (" voce esta de recuperação!")
