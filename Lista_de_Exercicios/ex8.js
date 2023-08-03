//tentei mas n entendi nada sozinho.

let stringPontuacoes = "12, 32, 44, 55, 6, 23"
function avaliaPontuacoes (stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(", ")
    let quebraDeRecords = 0 
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++){
        if (pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            quebraDeRecords++
        } else if(pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1
        }
    }
    return [quebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes));

