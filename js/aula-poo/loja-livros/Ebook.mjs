import Livro from "./Livro.mjs"

class Ebook extends Livro{
constructor(titulo,autor,preco,formato){
    super(titulo,autor,preco);
    this._formato = formato;
}

get formato(){
    return this._formato;
}

set formato(formato){
    this._formato = formato;
}

detalhes(){
    return super.detalhes()+"\nFormato: "+this._formato;
}

}

export default Ebook