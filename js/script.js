
let nome, idade, telefone, opcao

function calcSalario(){
   let salarioBruto = Number.parseFloat(document.getElementById("salarioBruto").value)
   let porcentagemDesc = Number.parseInt(document.getElementById("porcentagemDesc").value)

   if(isNaN(salarioBruto) || salarioBruto < 0 || porcentagemDesc < 0){
    document.getElementById("resultado").innerHTML ="Os valores são inválidos"
    return
   }
   let salarioLiquido = salarioBruto - (salarioBruto * porcentagemDesc/100)

   document.getElementById("resultado").innerHTML ="R$ " + salarioLiquido.toFixed(2)
}

function clickButton() {
    do {

        opcao = Number.parseInt(prompt("SEJA BEM-VINDO\n1-CADASTRAR USUARIO\n2-CALCULAR SALARIO\n3-SAIR\n ESCOLHA UMA OPÇÂO:"))

        switch (opcao) {
            case 1:
                nome = prompt("Digite seu nome\n")
                idade = prompt("Digite sua idade\n")
                telefone = prompt("Digite seu telefone\n")
                alert("Nome: " + nome + "\nIdade: " + idade + "\nTelefone: " + telefone + "\n")
                break
            case 2:
                let salarioBruto, salarioLiquido = Number
                let valorHora = Number.parseInt(prompt("Digite o valor por hora trabalhada"))
                let qtdDias = Number.parseInt(prompt("Digite a quantidade de horas trabalhadas"))
                let INSS = Number

                salarioBruto = valorHora * qtdDias

                if (salarioBruto < 1412) {
                    INSS = salarioBruto * 0.075
                } else if (salarioBruto < 2666) {
                    INSS = salarioBruto * 0.09
                } else if (salarioBruto < 4000) {
                    INSS = salarioBruto * 0.12
                } else if (salarioBruto < 7786) {
                    INSS = salarioBruto * 0.14
                }

                salarioLiquido = salarioBruto - INSS

                alert("Salario Bruto: " + salarioBruto + "\nINSS: " + INSS + "\nSalario Liquido: " + salarioLiquido)
                break
            case 3:
                opcao = 3
                break
            default:
                alert("OPÇÃO INVÁLIDA")
        }
    } while (opcao != 3)
}

function exibirUsers(){
    let string = "<h4>NOME DOS USUÁRIOS</h4><br>"
    let users = ['joaoVitor','marceloPedroso','anaMaria']

    for(let i = 0; i < users.length; i++) {
        string += `${users[i]}<br>`
    }
    document.getElementById("users").innerHTML= string
} 


