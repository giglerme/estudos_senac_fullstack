/*Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais.
Valide a entrada e permita repetir a operação.*/

let paisA = parseInt(prompt(`Digite a população:`));
let taxaCrescimentoA = parseInt(prompt(`Digite o crescimento da população A:`));
let paisB = parseInt(prompt(`Digite a população do país B:`));
let taxaCrescimentoB = parseInt(prompt(`DIgite o crescimento da população B:`));
let anos = 0;

while(paisA < paisB){
    paisA += paisA * taxaCrescimentoA;
    paisB += paisB * taxaCrescimentoB;
    anos++;
}

alert(`O país A passará o país B em ${anos} anos`);