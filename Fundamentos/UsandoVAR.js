{ 
    { 
        { 
            {
                var sera = 'Sera???'
                console.log(sera)
            } 
        } 
    } 
}
console.log(sera) // consegue acessar dentro e fora do bloco

function teste() {
    var local = 123
}
teste()
console.log(local) 
/*Não consegue acessar, porque quando voce define uma variavel dentro de uma função, o escopo dessa variavel só é visivel na função
*/