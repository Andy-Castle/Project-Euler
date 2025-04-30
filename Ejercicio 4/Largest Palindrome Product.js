/*
Un número palindrómico se lee igual en ambos sentidos. El mayor palindromo
formado por el producto de dos cifras(2) es 9009 = 91 X 99

Halla el palindromo mas grande formado por el producto de dos numero
de 3 digitos
*/

function ItsPalindrome(value) {
  let valueReverse = value.split("").reverse().join("");
  if (valueReverse == value) {
    return true;
  }
  return false;
}

let count = 100;
let result = 0;
let thisI = 0;
let condition = true;

function MultiplyValueX(value) {
  for (let i = 100; i <= 999; i++) {
    result = i * value;
    let palindrome = ItsPalindrome(String(result));
    if (palindrome) {
      return i;
    }
    // console.log(`${i} x ${count} = ${result}`);
  }
  return false;
}

console.log(MultiplyValueX(count));

// console.log(ItsPalindrome("9009"));
