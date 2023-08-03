function disponibilidade(fruta) {
    switch (fruta) {
        case "maçã":
            console.log("Não vendemos essa fruta aqui.");
            break
        case "kiwi":
            console.log("Estamos com escassez de kiwis.");
            break
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo.");
            break
        default:
            console.log("Erro, valor não registrado");
            
    }
}

disponibilidade("maçã")
disponibilidade("kiwi")
disponibilidade("melancia")
disponibilidade("banana")

/*Resposta

function venderFruta (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')

*/