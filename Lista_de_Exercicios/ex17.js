function novoSalario(salario, plano) {
    switch (plano) {
        case "A":
            return salario * (10/100) + salario
        case "B": 
            return salario * (15/100) + salario
        case "C":
            return salario * (20/100) + salario
        default:
            return "*Plano Invalido*" 
    }
}

console.log(novoSalario(3000, "A"));
console.log(novoSalario(2500, "B"));
console.log(novoSalario(2000, "C"));
console.log(novoSalario(2000, "D"));

/* Resposta

function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));


*/