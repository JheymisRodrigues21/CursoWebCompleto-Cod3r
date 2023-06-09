

const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}
// se for apenas uma sentença não é obrigatorio usa de chaves{}
// se mais de uma, como no exemplo, usar chaves e cuidar com ;
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // Retorna Reprovado. 
