function soBoaNoticia(nota) {
    if (nota >= 7) {// usou expressão relacional no exemplo
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {// valor generico
    if(valor) {// esse parametro não é nenhuma expressão, o parametro sera considerado como um valor verdadeiro apenas por conter algo
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)// não faz sentido usar undefined numa expresão, mas usamos para exemplo
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')//string vazia tambem é falso
seForVerdadeEuFalo(0)//Unico numero que sera falso
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])// verdadeiro
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})//verdadeiro
