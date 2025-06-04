"""
Un número palindrómico se lee igual en ambos sentidos. El mayor palindromo
formado por el producto de dos cifras(2) es 9009 = 91 X 99

Halla el palindromo mas grande formado por el producto de dos numero
de 3 digitos
"""

def esUnPalindromo(palabra):
  letras = list(palabra)
  letras.reverse()
  palabra_invertida = "".join(letras)
  if palabra == palabra_invertida:
    return True
  
#print(esUnPalindromo("9009")) #True

max_palindromo = 0

for i in range(100, 1000):
    for j in range(100, 1000):
      mult = i * j
      resultado = esUnPalindromo(str(mult))

      if len(str(i)) == 3 and len(str(j)) == 3 and resultado == True:
        if mult > max_palindromo:
          max_palindromo = mult

print(max_palindromo)

#este 906609








