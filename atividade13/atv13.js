class pedido{
    constructor(id, valor){
        this.id = id;
        this.valor = valor;
        this.lista = new Array
    }

    addItem(item){ 
        this.lista.push(item)
    }
    
    removeItem(){
        //this.lista.splice(this.lista.indexOf(item), 1)
        this.lista.pop()
    }
    
    totalDoPedido(){
        let totalPedido = 0
        for(let item of this.lista){
            totalPedido += item.this.valor
        }
        return totalPedido
    }

    resumoPedido(){
        let resumoPedido = ''
        for(let item of this.lista){
            resumoPedido += `${item.lista} - R$ ${item.valor}<br>` 
        }
        resumoPedido += `Total do pedido: R$ ${this.totalDoPedido()}<br>`
        return resumoPedido
    }
 

    
}