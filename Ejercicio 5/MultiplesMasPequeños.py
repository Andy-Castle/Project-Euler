"""
2520 ess el numero mas pequeño que se puede dividir por cada uno de los
numeros del 1 al 10 sin ningun resto

El numero positivo mas pequeño que es uniformemente divisible por todos
los numeros de 1 al 20?
"""

numero = 2520

def MultiplesMasPequeños(numero, inicio, final):
  for i in range(inicio, final):
    if numero % i == 0:
      continue
    return False
  return True




