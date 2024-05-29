import LivroFisico from "./LivroFisico.mjs"

let dbLivroFisico = []

function cadastrar(){
    let titulo = document.getElementById("titulo").value 
    let autor = document.getElementById("autor").value 
    let preco = document.getElementById("preco").value 
    let peso = document.getElementById("peso").value 

    dbLivroFisico.push(new LivroFisico(titulo, autor, preco, peso))

    alert("Livro fisico cadstrado!")
    console.log(dbLivroFisico)
}

function listar(){
    let text = ""
    for(let i=0; i<dbLivroFisico.length; i++){
        text += `<tr> 
        <td>${dbLivroFisico[i].titulo}</td>
        <td>${dbLivroFisico[i].autor}</td>
        <td>${dbLivroFisico[i].preco}</td>
        <td>${dbLivroFisico[i].peso}</td>
        </tr>`
    }
    document.getElementById("table-livros").innerHTML = text
}

document.getElementById("button").addEventListener('click', cadastrar)
document.getElementById("button-read").addEventListener('click', listar)