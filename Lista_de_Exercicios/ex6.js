function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial * taxaJuros * tempoAplicacao
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial * (1 + taxaJuros) ** tempoAplicacao
}

console.log(jurosSimples(100, 1.5, 1));
console.log(jurosCompostos(100, 1.5, 1));