function teste1(num) {
    if(num > 7)
        console.log(num)

    console.log('Final')// iria imprimir de qualquer forma,idependente se o numero é maior ou menor, pois não esta associada ao bloco if
}
//JS desconsidera identação
teste1(6)
teste1(8)

function teste2(num) {
     /*resposta2 = Sentença de codigo vazia */ 
    if(num > 7) ; {// cuidado com o ; < não usar com as estrtuturas de controle. Sem ; imprimiria 8
        console.log(num)// resposta1 = não esta associado ao IF, por isso imprime 6, chamdo fora da estrutura
        
    }
}

teste2(6)
teste2(8)