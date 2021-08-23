const aprovados = ['Ecthon', 'Jozi', 'Matteo']


//Funçãp ".sort()" -> Altera o Array ordenando seus elementos
aprovados.sort()
console.log(aprovados)

// deletar um item espcífico do array
delete aprovados[1]
console.log(aprovados)

// Função ".splice()" -> adicionar ou remover elementos de um array
const aprovadosBD = ['Ecthon', 'Jozi', 'Matteo']
aprovadosBD.splice(1, 1, 'Cacá') // excluindo o item Jozi da lista e adicionando o elemento "Cacá"
console.log(aprovadosBD)


