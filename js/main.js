const url = "http://localhost:3000/labschool"

function getAlunos(){
  axios.get(`${url}/alunos`).then((response) =>{
    const data = response.data.result

    let html = ""

    for (let i = 0; i < data.length; i++){
      html += `<tr>
        <th scope="row">${data[i].id}</th>
        <td>${data[i].nome}</td>
        <td>${data[i].telefone}</td>
        <td>${data[i].dt_nascimento}</td>
        <td>${data[i].endereco}</td>
        <td><button class="btn btn-success" type"button" onclick="redirect(${data[i].id},'${data[i].nome}','${data[i].telefone}','${data[i].dt_nascimento}','${data[i].endereco}')">Editar</button></td>
        <td><button class="btn btn-danger" type"button" onclick="deleteAluno(${data[i].id})">Excluir</button></td>
      </tr>`
    }
    document.getElementById("table-body").innerHTML = html
  } 
  )
  .catch((error) => console.log(error))
}

function getTurmas(){
axios.get(`${url}/turmas`).then((response)=>{
const data = response.data.result

let html = "<option disabled selected>Selecione uma opção</option>"

for(let i = 0;i < data.length; i++){
  html += `<option value ="${data[i].id}">${data[i].nome}</option>`
}
document.getElementById("curso-select").innerHTML = html

})
.catch((error) => console.log(error))

}

function getTurmasBySelected(){
  let select = document.getElementById("curso-select").value
  let option = select.options[select.selectedIndex].value
  axios.get(`${url}/turmas/${select}`).then((response)=>{
    const data = response.data.result
})
}

function createAluno(){
  let nome = document.getElementById("inputName").value
  let telefone = document.getElementById("inputCell").value
  let dt_nascimento = document.getElementById("inputDate").value
  let endereco = document.getElementById("inputAddress").value

  

  let select = document.getElementById("curso-select")
  let option = select.options[select.selectedIndex].value  

  const data = {
    nome: nome,
    telefone: telefone,
    dt_nascimento: dt_nascimento,
    endereco: endereco,
    turma: option
  }
  
  axios.post(`${url}/aluno`, data).then((response) => {
    alert(`Aluno ${response.data.result.nome} cadastrado com sucesso!`)
    window.location.href = "http://127.0.0.1:5500/user/formsCreate.html"
  }).catch((error) => console.log(error))
  
}

function deleteAluno(codigo) {
  axios.delete(`${url}/aluno/${codigo}`).then(
    alert(`Aluno ${codigo} excluido com sucesso!`),
    getAlunos()
  ).catch((error)=> console.log(error))
}

function redirect(codigo,nome,telefone,data,endereco){
  window.location.href = `http://127.0.0.1:5500/user/formsUpdate.html?codigo=${codigo}&nome=${nome}&telefone=${telefone}&data=${data}&endereco=${endereco}`
}

function loadFields(){
  const urlParams = new URLSearchParams(window.location.search)

  let id = urlParams.get('codigo')
  let nome = urlParams.get('nome')
  let telefone = urlParams.get('telefone')
  let data = converterData(urlParams.get('data'))
  let endereco = urlParams.get('endereco')
  

  document.getElementById("inputName").value = nome
  document.getElementById("inputCell").value = telefone
  document.getElementById("inputDate").value =  data
  document.getElementById("inputAddress").value = endereco
  document.getElementById("inputId").value = id
  
}

function converterData(data){
  //Remover '/' ,inverter data e adicionar '-' a variavel data
  return data.split('/').reverse().join('-')
}

function updateAluno(){
  let id = document.getElementById("inputId").value
  let nome = document.getElementById("inputName").value
  let telefone = document.getElementById("inputCell").value
  let dt_nascimento = document.getElementById("inputDate").value
  let endereco = document.getElementById("inputAddress").value

  const data = {
    nome: nome,
    telefone: telefone,
    dt_nascimento: dt_nascimento,
    endereco: endereco
  }

  axios.put(`${url}/aluno/${id}`, data).then(
    alert(`Aluno ${nome} atualizado com sucesso!`),
    window.location.href = "http://127.0.0.1:5500/"
  ).catch((error) => console.log(error))
}