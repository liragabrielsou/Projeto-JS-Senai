
//1º - QUESTÃO
let array = new Array

alert('Digite uma sequecia de 3 numeros')

for (let i = 0; i < 3; i++) {
    array[i] = Number.parseInt(prompt('Digite o '+ (i + 1) + 'º numero'))
}

let arrayInvertido = array.slice(0).reverse()

alert(arrayInvertido)


/*
//2º - QUESTÃO
let array = new Array
let qtdIntervalo

qtdIntervalo = Number.parseInt(prompt('Quantos numeros deseja inserir no array?'))

for (let i = 0; i < qtdIntervalo; i++) {
    array[i] = Number.parseInt(prompt('Digite o '+ (i + 1) + 'º numero'))
}

let arrayInvertido = array.slice(0).reverse()

alert("Ordenado: "+array+"\nInverso: "+arrayInvertido)
*/


/*
//3º - QUESTÃO
let array = new Array
let qtdIntervalo
let indices = new Array

qtdIntervalo = Number.parseInt(prompt('Quantos numeros deseja inserir no array?'))

for (let i = 0; i < qtdIntervalo; i++) {
    array[i] = Number.parseInt(prompt('Digite o '+ (i + 1) + 'º numero'))
}

let valor = Number.parseInt(prompt('Digite um numero já digitado'))

for (let i = 0; i < qtdIntervalo; i++){
    if (array[i] == valor) {
       indices.push(i + 1)
    }
}
alert('O valor '+ valor +' está na posição '+ indices)
*/