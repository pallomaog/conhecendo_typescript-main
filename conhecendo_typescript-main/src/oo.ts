class Pessoa {
    nome: string;
    renda?: number; // Esse '?' signfica que esta é uma propriedade opcional.

    constructor(nome: string, renda?: number) { // O parâmetro opcional 'renda' precisa necessariamente vir depois do parâmetro obrigatório 'nome'.
        this.nome = nome;
        this.renda = renda;
    }

    dizOi(): string {
        return `${this.nome} disse oi`;
    }
};

// Modificadores e Encapsulamento

// Encapsulamento público (usa-se o modificador 'public'): quando a propriedade é acessível em todos os níveis.
// Encapsulamento privado (usa-se o modificador 'private'): quando a propriedade é acessível apenas dentro de sua classe.
// Encapsulamento protegido (usa-se o modificador 'protected'): quando uma propriedade é protegida, ela só é acessível dentro de sua própria classe e da classe de suas filhas, não fora disso.

class ContaBancaria {
    protected saldo: number = 0; // O modificador 'private' torna 'saldo' acessível apenas em sua classe mãe; o modificador 'protected' torna 'saldo' acessível através de herança.
    numeroConta: number; // Propriedades públicas não precisam vir com o modificador 'public' na frente, pois é o modificador padrão, por isso não é obrigatório.

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    static retornaNumeroDoBanco() { // Os métodos também podem receber um modificador; o 'static' torna o método/propriedade pertencente à classe e não à instância.
        return 1234;
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
};

// Herança

class ContaBancariaPessoaFisica extends ContaBancaria { // o uso do 'extends' serve para dizer que 'ContaBancariaPessoaFisica' está herdando de 'ContaBancaria'.
    // Polimorfismo: capacidade de executar uma tarefa de diferentes maneiras.

    depositar(valor: number): void {
        this.saldo = valor * 2; // Aqui temos o polimorfismo, pois pegamos o método 'depositar' e implementamos ele de uma forma diferente.
    }
};

const contaDaManoela = new ContaBancariaPessoaFisica(12345678);  // 'contaDaManoela' é uma instância.
ContaBancaria.retornaNumeroDoBanco();
// contaDaManoela.retornaNumeroDoBanco // este membro estático, 'retornaNumeroDoBanco', serve apenas na classe, por isso não está acessível.