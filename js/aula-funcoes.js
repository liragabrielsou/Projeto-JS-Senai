/*Funções em JavaScript*/

//Funçoes Declarativas

function soma(valor1,valor2){
    return valor1 + valor2
}

function calcularAreaQuadrado(tamanhoLateral){
    return tamanhoLateral * tamanhoLateral
}

//Funções de Expressão
const subtracao = function(valor1,valor2){
    return valor1 - valor2
}

const calcularAreaTriangulo=function(base,altura){
    return base * altura
}
//Funções Arrows
const multiplicacao = (valor1,valor2)=>valor1 * valor2;

const calcularAreaCirculo = (raio)=>Math.PI * Math.pow(raio,2)

//Testes

console.log(soma(10,20))
console.log(calcularAreaQuadrado(10))
console.log(subtracao(10,20))
console.log(calcularAreaTriangulo(10,20))
console.log(multiplicacao(10,20))
console.log(calcularAreaCirculo(10))