
let opcao

opcao = Number.parseInt(prompt("ESCOLHA A OPÇÃO:\n1-Quantos salarios Minimos\n2-Media aluno"))

switch (opcao) {
    case 1:
        let salarioMinimo, salarioBruto, qtdSalario

        salarioMinimo = Number.parseInt(prompt("Digite o Valor do Salario Minimo"))
        salarioBruto = Number.parseInt(prompt("Digite o Valor do seu Salario"))

        qtdSalario = salarioBruto/salarioMinimo
        alert("Você recebe o total de até "+ qtdSalario.toFixed(0) + " Salario minimo" + (qtdSalario >= 2 ? "s":""))
        

        break;
    case 2:
        let nome
        let nota1, nota2, nota3, nota4, media = Number    

        nome = prompt("Digite o seu nome")
        nota1 = Number.parseInt(prompt("Digite a primeira nota"))
        nota2 = Number.parseInt(prompt("Digite a segunda nota"))
        nota3 = Number.parseInt(prompt("Digite a terceira nota"))
        nota4 = Number.parseInt(prompt("Digite a quarta nota"))

        media = (nota1+nota2+nota3+nota4)/4
        alert(nome+"\nSua média é: " + media)

        media > 7? alert("ALUNO APROVADO"):alert("ALUNO REPROVADO")
}

