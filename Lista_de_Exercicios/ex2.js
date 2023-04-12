function triangulos(compr1, compr2, compr3) {
    if (compr1 == compr2 && compr2 == compr3) {
        console.log(`O seu triangulo é um Equilátero, cujo suas medidas são ${compr1}cm, ${compr2}cm e ${compr3}cm`);
    }
    else if(compr1 == compr2 && compr2 != compr3){
        console.log(`O seu triangulo é um Isóceles, cujo suas medidas são ${compr1}cm, ${compr2}cm e ${compr3}cm`);
    }
    else if(compr1 != compr2 && compr2 != compr3)
    {
        console.log(`O seu triangulo é um Escaleno, cujo suas medidas são ${compr1}cm, ${compr2}cm e ${compr3}cm`);
    }
}

triangulos(4, 4, 4)
triangulos(1, 3, 4)
triangulos(2, 2, 3)

/* Resposta 

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));

*/