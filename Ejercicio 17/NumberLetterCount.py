from num2words import num2words

sum = 0

for i in range(1, 1001):
  sum += len( str(num2words(i)).replace(" ","").replace("-", ""))

print(sum)