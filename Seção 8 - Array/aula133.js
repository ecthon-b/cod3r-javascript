const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})

// mesma função, mas utilizando Arrow Function
aprovados.forEach(() => console.log(nome))

// armazenar a função em um variável e passar por parametro
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


// o index sempre será o segundo parametro
// a função callback que você passa para o forEach pode receber
// três parametros: Ex.: function(nome, indice, array)