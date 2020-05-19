def calc(numb1,numb2,op):
    if op == '+':
        return numb1 + numb2
    elif op == '-':
        return numb1 - numb2
    elif op == '*':
        return numb1 * numb2
    elif op == '/':
        return numb1 / numb2
    
numb1 = 0
while True:
    if numb1 == 0:
        numb1 = int(input('Digite o primeiro número: '))

    operador = input('Digite o operador: ')
    numb2 = int(input('Digite o segundo número: '))
    
    numb1 = calc(numb1,numb2,operador)
    print('Resultado: %d' % numb1)
    print('------------')

    state = input('Você quer continuar?\nz: para sair\nx: para zerar valores\nqualquer tecla para continuar... ')
    if state == 'z':
        break
    elif state == 'x':
        numb1 = 0