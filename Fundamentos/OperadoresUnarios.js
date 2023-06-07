let num1 = 1 
let num2 = 2

num1++ //forma pós fixada
console.log(num1)
--num1 //tem uma prioridade maior que num1++
console.log(num1)

console.log(++num1 === num2--) // dá verdadeiro pois lê o num++ e faz a comparação antes de do decremento num2--
