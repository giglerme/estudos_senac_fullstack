let nota = parseFloat(prompt(`Digite a nota final.`));

let entradaInvalida = isNaN(nota) || nota<0||nota>10;
let aprovado = nota >= 7;
let reprovado = nota < 3;

if (entradaInvalida){
    alert(`Entrada inválida \n Digite novamente`);
} else if (aprovado){
    alert(`Parabéns, você está aprovado`);
} else if (reprovado){
    alert(`Burrão`);
} else {
    alert(`Você está de recuperação`);
    let notaRec = parseFloat(prompt(`Informe a nota da recuperação`));
    let mediaRec = (nota + notaRec) / 2;
    aprovado = mediaRec >=5;
    if (aprovado){
        alert(`Parabéns, Você está aprovado.`);
    } else {
        alert(`Burro`)
    }
}