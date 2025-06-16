function MultiplesMasPequeños(numero, inicio, final) {
  for (let i = inicio; i < final; i++) {
    if (numero % i == 0) {
      continue;
    }
    return false;
  }
  return true;
}

function ObtenerNumero() {
  for (let i = 1; i < Infinity; i++) {
    result = MultiplesMasPequeños(i, 1, 21);
    if (result == true) {
      console.log(i);
      break;
    }
  }
}

// console.log(MultiplesMasPequeños(numero, 1, 21));

ObtenerNumero();
