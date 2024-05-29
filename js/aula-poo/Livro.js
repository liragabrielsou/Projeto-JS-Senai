class livro {
    constructor(titulo, autor, qtdCopias) {
        this._titulo = titulo
        this._autor = autor
        this._qtdCopias = qtdCopias
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
    get qtdCopias() {
        return this._qtdCopias
    }
    set qtdCopias(qtdCopias) {
        this._qtdCopias = qtdCopias
    }

    emprestar() {
        if (this._qtdCopias > 0) {
            this._qtdCopias--
            alert("Emprestimo Realizado")
        } else {
            alert("Não há mais exemplares disponíveis")
        }
    }
    devolver() {
        this._qtdCopias++
        alert("Devolução Realizada")
    }
    
}

const livro1 = new livro("O Senhor dos Anéis", "Tolkien", 10)

livro1.emprestar()
livro1.emprestar()
livro1.emprestar()
console.log(livro1.qtdCopias)

livro1.devolver()
livro1.devolver()
console.log(livro1.qtdCopias)
