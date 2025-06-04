def numerosPrimos(numero):
  for i in range(2, numero):
      divisores = 0
      for j in range(1, i + 1):
          if i % j == 0:
              divisores += 1
      if divisores == 2:
          print(i)


# result = 0

# result += 



