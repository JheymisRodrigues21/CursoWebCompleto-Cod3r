function getInteiroAleatorioEntre(min, max) {
    const valor = math.random() * (max - min) + min
    return math.floor(valor)
}

let opcao = -1
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a proxima!')
