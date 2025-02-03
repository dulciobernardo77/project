def Maior_numero():
    if not array:
        return None
    maior = array[0]
    for numero in array:
        if numero > maior:
            maior = numero
    return maior

numeros = [10,20,30,19,26,100,200]
print(Maior_numero(numeros))

