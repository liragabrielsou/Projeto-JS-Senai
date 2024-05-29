export class Pedido{
    constructor(id,cliente){
        this._id = id;
        this._item = []
        this._total = 0
        this._cliente = cliente
    }
    get id(){
        return this._id
    }
    get item(){
        return this._item
    }
    get total(){
        return this._total
    }
    set total(total){
        this._total = total
    }
    set item(item){
        this._item = item
    }
    set cliente(cliente){
        this._cliente = cliente
    }
    get cliente(){
        return this._cliente
    }
    addItem(item){
        this._item.push(item)
        this._total += item.preco
    }
    removeItem(item){
        this._item.splice(this._item.indexOf(item), 1)
    }
    
    relatorio(){
        let text =`ID: ${this._id}\n Cliente:${this._cliente.nomeCompleto}\n\n ITENS DO PEDIDO:\n\n`

        for(let item of this._item){
            text +="\n"+  item.relatorio()
        }

        return text + `\n \n\nTOTAL:R$ ${this._total.toFixed(2)}}`
        + `\n INFORMAÇÕES DE ENTREGA`
        + `\nENDEREÇO:${this._cliente.endereco}`
        + `\nTELEFONE:${this._cliente.telefone}`
    }
}

