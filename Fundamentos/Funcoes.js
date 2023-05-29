/* Função é um bloco de código {}*/

console.log(typeof Object)

class Produto {} // qualquer classe é uma função
console.log(typeof Produto)

function imprimirSoma (a, b) {
console.log(a + b)    
}

imprimirSoma(2, 3)
imprimirSoma(2)// numero 2 somando a undefined imprime NAN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // soma os dois primeiros e ignora os demais parametros sem erro
imprimirSoma()
// Função com retorno
function soma(a, b = 1) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))


