function evenFibonacciNumbers() {
  let anterior = 0;
  let actual = 1;
  let resultado = 0;

  for (let i = 0; ; i++) {
    const siguiente = anterior + actual;

    if (siguiente > 4000000) {
      break;
    }

    if (siguiente % 2 === 0) {
      resultado += siguiente;
    }
    anterior = actual;
    actual = siguiente;
  }
  console.log(resultado);
}

evenFibonacciNumbers();
