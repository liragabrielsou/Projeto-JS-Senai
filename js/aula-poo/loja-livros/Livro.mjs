class Livro{
    constructor(titulo, autor, preco) {
        this._titulo = titulo
        this._autor = autor
        this._preco = preco
    }
    get titulo() {
        return this._titulo
    }
    set titulo(titulo) {
        this._titulo = titulo
    }
    get autor() {
        return this._autor
    }
    set autor(autor) {
        this._autor = autor
    }
    get preco() {
        return this._preco
    }
    set preco(preco) {
        this._preco = preco
    }

    detalhes() {
        return "Título: "+this._titulo+"\nAutor: "+this._autor+"\nPreço: "+this._preco
    }
}

export default Livro