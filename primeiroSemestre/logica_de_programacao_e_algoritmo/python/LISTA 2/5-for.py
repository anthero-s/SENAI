#-*- coding: UTF-8 -*-

print ("olá, blz? irei fazer a tabuada do 0 ao 9 para você!")
for i in range (0,10):
    x = 0
    if i * 10:
            print(f" tabuada do: {i}")
    while x <= 10:
        print (f"{x} X  {i} = {x*i}")
        x +=1
        
