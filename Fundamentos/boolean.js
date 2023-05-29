let isAtivo = false  //Interessante usar let quando for necessario alterar o valor das variaveis
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1  /*tipo de dado que pode ser entendido como true ou false se usarmos operadores logicos
              dependendo da situação, faz se necessario */

console.log(!isAtivo) // false
console.log(!!isAtivo) // true

/*exemplos de dados não booleanos mas que, dependendo do contexeto,
se comportam como verdadeio ou falso*/
console.log('os verdeiros...')
console.log (!!3)
console.log(!!-1)
console.log(!!'')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0) 
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!(''|| null || 0 || ' '))//operação com operador logico 'OU', baseada em verdadeiro ou falso



let nome = 'Jheymis' // se a string estivesse vazia, iria imprimir "desconhecido"
console.log(nome || 'desconhecido') 

