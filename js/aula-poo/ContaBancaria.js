class ContaBancaria {
    constructor(saldo) {
        this._saldo = saldo
    }

    get saldo() {
        return this._saldo
    }

    set saldo(novoSaldo) {
        if (novoSaldo >= 0) {
            this._saldo = novoSaldo
        } else {
            console.log("O saldo não pode ser negativo");
            alert("O saldo não pode ser negativo")
        }

        const conta1 = new ContaBancaria(2000)
        console.log("Saldo Inicial: " + conta1.saldo)
        conta1.saldo = 5000
        console.log("Saldo: " + conta1.saldo)
        conta1.saldo = -500
    }
    

}