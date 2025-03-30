function squareOfThefirstOneHundredNaturalNumbers(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += Math.pow(i, 2);
  }
  return result;
}

let sumOfSquaresFirstOneHundred = squareOfThefirstOneHundredNaturalNumbers(100);

function squareOfThefirstOneHundredNaturalNumbersSUM(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += i;
  }
  return Math.pow(result, 2);
}

let squareSumFirstOneHundred = squareOfThefirstOneHundredNaturalNumbersSUM(100);

console.log(squareSumFirstOneHundred - sumOfSquaresFirstOneHundred);
