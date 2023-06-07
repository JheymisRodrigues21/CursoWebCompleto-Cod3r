const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' /* Expressão bem reduzida, usando operador ternário
lê-se se nota maior igual a 7 for verdadiro, retorna Aprovado. Se falso, Reprovado */

console.log(resultado(7.1))
console.log(resultado(6.7))