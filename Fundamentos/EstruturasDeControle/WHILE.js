//While é focado em repetições quando ha uma quantidade indterminada de vezes. 
//Ela é baseada numa expressao verdadeiro ou falso
// procurar a estrutura de controle mais adequada para a situação

function getInteiroAleatorioEntre(min, max) {

/*Random gera um valor entre 0 e 1*/
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao},`)
}
console.log('Ate a próxima!')