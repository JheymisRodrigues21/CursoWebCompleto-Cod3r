const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
/*não imprime o indice 2 e 8 msmo estando nessa função
 pois var não tem escopo de bloco nem de função.*/
 funcs[2]()
 funcs[8]()