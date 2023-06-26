let numero1 = prompt("Digite o primeiro número: ")
let numero2 = prompt("Digite o segundo número: ")

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

if(numero1>numero2){
    alert(numero1 + " é maior que " + numero2)
} else if(numero2>numero1){
    alert(numero2 + " é maior que " + numero1)
} else{
    alert("Ambos os números são iguais!");
}   