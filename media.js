var notasDoAluno = [5, 7, 6,];
var soma = 0;

for (var i = 0; i < notasDoAluno.length; i++) {
  soma += notasDoAluno[i];
}

var mediaFinal = soma / notasDoAluno.length;

console.log("A média do aluno é: " + mediaFinal.toFixed(1));

if (mediaFinal >= 7.0) {
    console.log("O aluno foi aprovado!");
  } else {
    console.log("O aluno foi reprovado.");
  }
