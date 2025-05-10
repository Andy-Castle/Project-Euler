sum = 0

for i in range(1,1001):
  result = i ** i
  sum += result

print(str(sum)[-10:])