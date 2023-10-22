function calcularFatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  const number = 5;
  const resultado = calcularFatorial(number);
  console.log(`O fatorial de ${numero} é ${resultado}`);