const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// ".pop()" -> remove o último elemento do array
pilotos.pop()
console.log(pilotos)

// ".push()" -> adiciona um novo elemento no final do array
pilotos.pop('Verstappen')
console.log(pilotos)

// ".shift()" -> remove o item da primeira posição
pilotos.shift() 
console.log(pilotos)

// ".unshift()" -> adiciona um item na primeira posição do array
pilotos.unshift('Hamilton') 
console.log(pilotos)

// splice pode adicionar e remover elementos
// adicionar com splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover com splice
pilotos.splice(3,1) // remove o elemento do ídice 3
console.log(pilotos)

// ".slice()" -> retorna um novo array
const algunsPilotos1 = pilotos.slice(2) //pegando os elementos a partir do índice 2
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1, 4) //pegando a partir do índice 1, mas não pegando o índice 4
console.log(algunsPilotos1)

