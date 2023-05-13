const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) /* number.isInteger verifica se o valor
                                     * passado é inteiro
                                    */

console.log(Number.isInteger(peso2)); // Number.isInteger é uma função do tipo de dado numero
console.log(typeof peso2) // typeof retorna o tipo de dado da variavel

const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(total)
console.log(media.toFixed(2)) /* retorna o numero de casas decimais desjado, 
                              *no caso duas, retornando 7.87 do resultado 7.8709999999999996 */

console.log(media.toString(2)) //Converte valor numerico em string. adicionando 2 transforma o valor em binarioÇ~m]ón
