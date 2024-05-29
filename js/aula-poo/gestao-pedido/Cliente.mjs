class Cliente{
    constructor(nomeCompleto,telefone,endereco){
        this._nomeCompleto = nomeCompleto
        this._telefone = telefone
        this._endereco = endereco
    }
    get nomeCompleto(){
        return this._nomeCompleto
    }
    set nomeCompleto(nomeCompleto){
        this._nomeCompleto = nomeCompleto
    }
    get telefone(){
        return this._telefone
    }
    set telefone(telefone){
        this._telefone = telefone
    }
    get endereco(){
        return this._endereco
    }
    set endereco(endereco){
        this._endereco = endereco
    }
    relatorioCliente(){
        return "Nome: "+this._nomeCompleto+"\nTelefone: "+this._telefone+"\nEndereço: "+this._endereco;
    }

}

export default Cliente