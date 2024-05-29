export class Item{
    constructor(nome,preco){
        this._nome = nome;
        this._preco = preco;
    }
    get nome(){
        return this._nome;
    }
    get preco(){
        return this._preco;
    }
    set nome(nome){
        this._nome = nome;
    }
    set preco(preco){
        this._preco = preco;
    }
    relatorio(){
        return "Nome: "+this._nome+"\nPreço: "+this._preco;
    }
}

