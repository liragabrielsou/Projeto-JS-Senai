let array = []

/*console.log(array)

//FOR convencional
for(let i = 0;i < array.length; i++){
    console.log(array[i])
}
//FOR OF
for(let item of array){
    console.log(item)
}
for(let item in array){
    console.log(item)
}
*/

//Adiciona ao fim do array
array.push('Fim!')

//Adiciona ao Inicio do array
array.unshift('Inicio')

for(let item of array){
    console.log(item)
}
//excluir ao Inicio do array
array.shift()

//excluir ao fim do array
array.pop()

console.log('----------------')

for(let item of array){
    console.log(item)
}
array.push('Fevereiro')
// posição do array em primeira ocorrencia
console.log('o 1º Fevereiro está no indice:' + array.indexOf('Fevereiro'))

// posição do array em ultima ocorrencia
console.log('o 2º Fevereiro está no indice:' + array.lastIndexOf('Fevereiro'))

console.log('----------------')

for(let item of array){
    console.log(item)
}

console.log('Dezembro está cadastrado? '+ (array.includes('Dezembro')? 'Sim':'Não'))