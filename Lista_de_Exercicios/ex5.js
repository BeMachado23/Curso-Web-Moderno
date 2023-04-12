function impressaoCorreta(soma, moeda = "R$"){
    if(soma >= 0.3){
        return (`${moeda}0,30`);
    }

}

console.log(impressaoCorreta(0.2 + 0.3));



/* Resposta

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)

*/

