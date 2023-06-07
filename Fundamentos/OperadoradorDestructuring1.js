const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//console.log(pessoa.nome)

const { nome, idade} = pessoa /* Tira do objeto o valor NOME e IDADE
const {} ==> represnta o operador destructuring*/
console.log( nome, idade)


const {nome: n, idade: i} = pessoa /* Tira/extrai de uma estrutura/objeto o atributo NOME e IDADE
e cria variaveis com o atributo n e atributo i*/
console.log(n, i)

//tirar um atributo que não existe na estrutura/objeto (meio bizarro, mas é possivel kkk)
const {sobrenome, bemhumorada = true} = pessoa // atribuiu o valor padrão TRUE a variavel que não existe, apenas para teste
// se não vier nada do objeto bemhumorada, por padrão, assuma o valor true

console.log(sobrenome, bemhumorada)


//acessando atributos logradouro e numero
const { endereco: { logradouro, numero, cep}} = pessoa
console.log({ logradouro, numero, cep}) // prcisa garantir que o dado esteja setado, que haj um caminho ate o ultimo dado

//ATENÇÂO
//const { conta: {ag, num}} = pessoa
/*console.log(ag, num) Dá erro pois nesse caso, nem conta, nem os demais dados existem
apenas o ultimo dado pode ser nulo ou undefined, pois deve haver um caminho ate esse ultimo dado*/