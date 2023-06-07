// Resultado sempre sera verdadeiro ou falso
console.log('01)', '1' == 1) //Verdadeiro, pois se preocupa com o valor e não o tipo
console.log('02)', '1' === 1) //estritamente igual, pois considera valor e tipo de dado
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('5)', 3 < 2)
console.log('6)', 3 < 2)
console.log('7)', 3 <= 2)
console.log('8)', 3 >= 2)

const d1 = new Date(0)//01/01/ 1970
const d2 = new Date(0)
console.log('09)', d1 === d2)// ~~~~
console.log('10)', d1 == d2)// compara referncia de memoria
console.log('11)', d1.getTime() === d2)

console.log('12)', undefined == null) 
console.log('13)', undefined === null)// estritamnte igual (===)são diferentes