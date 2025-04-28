/*Los numeros primos son aquellos que tienen 2 divisores,
1 y ellos mismos, si tienen mas divisores no es numero primo */

function comprobarCantidadDeDivisores(numeroPrimo) {
  if (numeroPrimo <= 0) {
    return;
  }
  let divisores = 0;

  for (let i = 2; i <= numeroPrimo; i++) {
    if (numeroPrimo % i === 0) {
      divisores++;
    }
  }

  if (numeroPrimo / 1 == numeroPrimo) {
    divisores++;
  }

  return divisores;
}

comprobarCantidadDeDivisores(4);

function sacarNumeroPrimo(total) {
  let numerosPrimos = [];

  for (let i = 0; Infinity; i++) {
    let esPrimo = comprobarCantidadDeDivisores(i);
    if (esPrimo == 2) {
      numerosPrimos.push(i);
    }
    if (numerosPrimos.length == total) {
      return numerosPrimos;
    }
  }
}

let array = sacarNumeroPrimo(10001);

console.log(array[array.length - 1]);
