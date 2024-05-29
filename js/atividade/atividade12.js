
/*1º - QUESTÃO */
/*Crie uma função que calcule a área de um
quadrado.*/

function areaQuadrado() {
    let valorQuad1 = Number.parseInt(document.getElementById("ladoQuadrado1").value)
    let valorQuad2 = Number.parseInt(document.getElementById("ladoQuadrado2").value)
    let resultadoQuadrado = valorQuad1 * valorQuad2
    document.getElementById("resultadoQuadrado").innerHTML = resultadoQuadrado + " cm"
    return
}
//2º - QUESTÃO
/*Crie uma função que verifica se um número é par
ou ímpar. */

const imparPar = () =>{
    let resultadoPar
    let valor = Number.parseInt(document.getElementById("numeroParOuImpar").value)
    valor % 2 ? resultadoPar="Deu Impar" : resultadoPar="Deu Par"
    document.getElementById("resultadoPar").innerHTML = resultadoPar
    return
}

/*3º - QUESTÃO*/
/*Implemente uma função em Javascript que simule
um sistema de login, validando usuário e senha. */

const login = () => {
    if (document.getElementById("userEmail").value == "gabriel" && document.getElementById("userPassword").value == "123") {
        alert("Login efetuado com sucesso")
    } else {
        alert("Usuario ou senha incorretos")
    }
}

