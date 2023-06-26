function classificarNota(nota){
    if(nota<0 || nota>10 || isNaN(nota)){
        return "Entrada Inválida";

    } else if (nota>=7){
        return "Aprovado"

    } else if (nota<3){
        return "Burrão"

    } else {
        return "Recuperação"

    }

}


let nota = parseFloat(prompt("Digite"));

alert(classificarNota(nota));
