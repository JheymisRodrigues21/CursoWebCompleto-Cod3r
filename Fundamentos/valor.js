const saudacao = 'Opa' // Contexto léxico 1

function exec () {
const saudacao = 'Faala' // Contexto Lexico 2
return saudacao
}

// Objetos são grupos alinhados depares nome/valor
const cliente= {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        Logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)