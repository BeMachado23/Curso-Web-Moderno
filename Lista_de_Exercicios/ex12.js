function calcularFatorial(x) {
    if( x == 0){
        return 1
    }
    else{
        return x * calcularFatorial(x - 1)
    }
}

console.log(calcularFatorial(5));
console.log(calcularFatorial(10));
console.log(calcularFatorial(3));

/* Resposta 

    function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))

*/