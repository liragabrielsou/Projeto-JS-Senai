import { Pedido } from "./Pedido.mjs"
import { Item } from "./Item.mjs"
import Cliente from "./Cliente.mjs"

let cliente = new Cliente("Gabriel Lira","99999999999","Rua 1")

let pedido = new Pedido(240509001,cliente)

let item1 = new Item("Notebook Ledenovo",2500)

let item2 = new Item("Monitor Negativo",800)

pedido.addItem(item1)

pedido.addItem(item2)

console.log(pedido.relatorio())

/*
    Implementar a classe Cliente (nomeCompleto,telefone,endereco) e no 
    relatorio do pedido deverá incluir o nome cliente com as suas informações
    para a entrega...
*/