Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Hora')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(a, 6.99)) {
        console.log('Recuperção')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    }
}