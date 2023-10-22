function calcularJurosSimples(principal, taxaDeJuros, periodo) {
    const juros = principal * taxaDeJuros * periodo;
    return juros;
  }
  
  const principal = 1000; 
  const taxaDeJuros = 0.05; 
  const periodo = 2; 
  
  const jurosSimples = calcularJurosSimples(principal, taxaDeJuros, periodo);
  console.log('Juros Simples:', jurosSimples);
  
