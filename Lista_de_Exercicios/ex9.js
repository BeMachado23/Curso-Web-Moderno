function notas(nota){
    let arredondarNota =  arredondamento(nota)
        if(arredondarNota < 40){
            console.log(`Sua nota foi de ${arredondarNota}, ela resultou em sua reprovação`);
        }else{
            console.log(`Você foi aprovado com a nota de ${arredondarNota}`);
        }
    }
function arredondamento(nota) {
     if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
     }else{
        return nota
     }
    
}

console.log(notas(38));
console.log(notas(37));
console.log(notas(Math.floor(Math.random() * (100 - 0) + 0)));

/*Resposta

function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)


*/