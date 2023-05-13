const nome = 'Rebeca '
const concatenacao = 'Ola ' + nome + '!'
const template =  `
Ola
${nome}!` // considerou espaços e quebra de linha.

console.log(concatenacao, template)

//expressões

console.log(`1+1 = ${1+1}`)
 /* dentro de um Template String é possivel chamar uma função
 abordou cenas do proximo capitulo : Funções: Arrow
 */
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)
