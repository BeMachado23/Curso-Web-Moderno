function resto(dividendo, divisor) {
    console.log(`Resultado: ${dividendo / divisor}`);

    let resto = `Resto: ${dividendo % divisor}` 
    return resto
}

console.log(resto(12, 5));


/* Resposta

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)

*/