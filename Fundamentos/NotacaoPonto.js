//Acessa membros de uma função/objeto a partir da notação ponto

/*Math é um objeto embutido que tem propriedades e métodos para funções constantes e MATEMATICAS.
 Não é um objeto de função. */
console.log(Math.ceil(6.1))// simplesmente chama a função CEIL de Math via ponto :)

/*console.log(typeof console) = demonstra o uso da notação ponto para 
 chamar a função LOG do CONSOLE
 o a função TYPEOF exibe o tipo de dado do CONSOLE, que no caso é um Objeto em js*/

const obj1 = {}
obj1.nome = 'Bola' // cria um atributo através do ponto
/*obj1['nome'] = 'Bola2' alternativa para criar atributo via []*/
console.log(obj1.nome)

function Obj (nome) {

    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj("Mesa")

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()