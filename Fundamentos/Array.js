const valores = [7.7, 8.9, 6.3, 9.2]//Os indices contam a partir do zero
console.log(valores [0], valores[3])// Acessa os elementos
console.log(valores [4]) //Retorna Undefined, pois o indice não existe no Array
valores[4]= 10
console.log(valores)// Passou a ter elemento de indice 4

/*valores[10]= 10 
console.log(valores)*/

console.log(valores.length)// essa variavel, length, exibe quantos elementos existe no Array

valores.push({id: 3}, false, null, 'teste')/* Função push adiciona novos elementos ao Array. 
O Array aceita multiplos valores e tipos de dados. Isso é posivel no JS por esta ser uma linguagem de tipagem fraca
Mas é recomendado criar arrays com dados iguais*/
console.log(valores)

console.log(valores.pop()) //Esta função retira o ultimo indice do Array, no caso o valor 'teste'
delete valores[0]// Outra forma de ecluir o valor do indice, porem eta mantem o indice.
console.log(valores)

tconsole.log(typeof valores)//Em Javascript, Array é um objeto