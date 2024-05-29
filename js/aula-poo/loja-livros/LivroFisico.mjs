import Livro from "./Livro.mjs"
class LivroFisico extends Livro{
    constructor(titulo,autor,preco,peso){
        super(titulo,autor,preco)
        this._peso = peso

    }

    get peso(){
        return this._peso
    }
    set peso(peso){
        this._peso = peso
    }
    detalhes(){
        return super.detalhes()+"\nPeso: "+this._peso
    }
}

export default LivroFisico