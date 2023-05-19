const prod1 = {} /* [] Forma literal para escrever um Array
                 {}   ~~~~ Objeto */

prod1.nome = 'Calcular Ultra Mega'  /*O Objeto em Javascript é uma coleção de chaves e valor
nessa função deu um identificador chamado nome seguido de um valor , que é o 'Calcular Ultra Mega*/
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40// é possivel, mas é recomendavel evitar atributos usando espaços


console.log(prod1)            

const prod2 = {    //não é o mesmo que Json
    nome: 'Cmaisa Polo',
    preco: 79.90,

    obj: {
        blabla: 1,
        obj: {blabla: 2
        }
    }
} //Estrutura alinhada de objetos "Conjunto pares de chave e Valor"


/*const prod2 = '{ "nome": "Cmaisa Polo", "preco": 79.90}' /* Exemplo de Json, Json é um formato textual*/

console.log(prod2)