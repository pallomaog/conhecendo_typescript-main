"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOi() {
        return `${this.nome} disse oi`;
    }
}
;
// Modificadores e Encapsulamento
// Encapsulamento público (usa-se o modificador 'public'): quando a propriedade é acessível em todos os níveis.
// Encapsulamento privado (usa-se o modificador 'private'): quando a propriedade é acessível apenas dentro de sua classe.
// Encapsulamento protegido (usa-se o modificador 'protected'): quando uma propriedade é protegida, ela só é acessível dentro de sua própria classe e da classe de suas filhas, não fora disso.
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0; // O modificador 'private' torna 'saldo' acessível apenas em sua classe mãe; o modificador 'protected' torna 'saldo' acessível através de herança.
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 1234;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
;
// Herança
class ContaBancariaPessoaFisica extends ContaBancaria {
    // Polimorfismo: capacidade de executar uma tarefa de diferentes maneiras.
    depositar(valor) {
        this.saldo = valor * 2; // Aqui temos o polimorfismo, pois pegamos o método 'depositar' e implementamos ele de uma forma diferente.
    }
}
;
const contaDaManoela = new ContaBancariaPessoaFisica(12345678); // 'contaDaManoela' é uma instância.
ContaBancaria.retornaNumeroDoBanco();
// contaDaManoela.retornaNumeroDoBanco // este membro estático, 'retornaNumeroDoBanco', serve apenas na classe, por isso não está acessível.
