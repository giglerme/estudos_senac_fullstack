let numero1 = parseInt(prompt(`Digite o primeiro número:`));
let numero2 = parseInt(prompt(`Digite o segundo número:`));
let numero3 = parseInt(prompt(`Digite o terceiro e último número: `));

let aux = 0;

if (numero1 >= numero2) {
    aux = numero1;
    numero1 = numero2;
    numero2 = aux;
}

if (numero2 >= numero3){
    aux = numero2;
    numero2 = numero3;
    numero3 = aux;
}

if (numero1 >= numero2) {
    aux = numero1;
    numero1 = numero2;
    numero2 = aux;
}

alert(`${numero1} < ${numero2} < ${numero3}`);