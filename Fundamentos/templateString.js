const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá 

    ${nome}!` // Apenas para demonstrar que Considera quebra de linha
    console.log(concatenacao, template)

    // Expressões
    console.log(`1 + 1 = ${1+1}`)

    const up = texto => texto.toUpperCase()// Imprime o conteudo do paramentro em letras maiuscula
    console.log(`Ei... ${up('Cuidado')}!`)

