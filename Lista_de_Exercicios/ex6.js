function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial * taxaJuros * tempoAplicacao
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial * (1 + taxaJuros) ** tempoAplicacao
}

console.log(jurosSimples(100, 1.5, 1));
console.log(jurosCompostos(100, 1.5, 1));


/* Resposta

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));


*/