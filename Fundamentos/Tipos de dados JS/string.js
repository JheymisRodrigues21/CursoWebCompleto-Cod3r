/* Conceito rapido: Sequencia de caracteres que pode ser usada para representar texto e dados.
Usada para armazenar e manipular textos, como palavras, frases ou numeros,
sempre envolvidas por aspas duplas ("") ou aspas simples ('').*/

const escola = "Cod3r"
console.log(escola.charAt(4))/*função CharAt exibe o carctere no indicie
                            indicado. Os indices contam a partir do 0 (c=0)*/
console.log(escola.charAt(5)) //nesse caso não gera erro, exibe nulo
console.log(escola.charCodeAt(3))// tabela unicode 
console.log(escola.indexOf('3'))/* Situaçao inversa ao primeiro caso.
   ao discriminar o caractere no console, exibe qual indice ocupa na string*/
   console.log(escola.substring(1))  //imprime os caracteres  partir do indice 1
   console.log(escola.substring(0, 3))// imprime do indice 0 ao 3 sem imprimir o indice 3
  
   console.log('Escola '.concat(escola).concat("!"))// concatena literais à variavel
   console.log('Escola '+ (escola)+ ("!"))//poderia simplesmente concatenar com o operador aritmetico +

   console.log(escola.replace(3, 'e')) //substitui o caractere no indice 3 por e

/*console.log(escola.replace(/\d/, 'e')) breve exemplo de expressoes regulares em Regex
substitui todos os digitos pela letra e*/
console.log(escola.replace(/\w/g, 'e')) //neste outro exemplo substitui todas as letras e digitos pelo e

console.log('Ana, Maria,Pedro'.split(',')) // converte a string em Array. o split é um separador e usa ponto, virgula etc para separar
console.log('Ana, Maria,Pedro'.split(/,/))
console.log('Ana, Maria,Pedro'.split(/./))// ainda tocando no assunto da Regex...