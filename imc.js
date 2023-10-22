function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

var peso = 70;
var altura = 1.75; 

var imc = calcularIMC(peso, altura);
console.log("Seu IMC é: " + imc.toFixed(2));
