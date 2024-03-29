function fazerPedido(codigoProduto, quantidade) {
    switch (codigoProduto) {
        case 100:
            console.log("O pedido ficará com o valor de:", quantidade * 3);
            break;
        case 200:
            console.log("O pedido ficará com o valor de:", quantidade * 4);
            break
        case 300:
            console.log("O pedido ficará com o valor de:", quantidade * 5.5);
            break
        case 400:
            console.log("O pedido ficará com o valor de:", quantidade * 7.5);
            break
        case 500:
            console.log("O pedido ficará com o valor de:", quantidade * 3.5);
            break
        case 600:
            console.log("O pedido ficará com o valor de:", quantidade * 2.8);
            break
        default:
            console.log("Código inválido, produto não existente");
            break;
    }
}

fazerPedido(100, 2)
fazerPedido(200, 3)
fazerPedido(300, 4)
fazerPedido(400, 1)
fazerPedido(500, 3)
fazerPedido(600, 5)
fazerPedido(900, 10)
/* Resposta
 
function calcularVenda(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8
        default:
            return 'Produto não existente.'
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))

*/