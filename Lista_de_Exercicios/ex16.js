function calcular(valor1, sinal, valor2) {
    switch (sinal) {
        case "+" :
            return valor1 + valor2
        case "-":
            return valor1 - valor2
        case "/":
            return valor1 / valor2
        default:
            return "Operação invalida, certifique-se que o sinal da operação está correto ou se foi posto algum caractere."
    }
}

console.log(calcular(3, "-", 2));
console.log(calcular(2, "*", 3));
console.log(calcular(10, "+", 2));
console.log(calcular(34,"b", 21));


/*Resposta 

function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));


*/