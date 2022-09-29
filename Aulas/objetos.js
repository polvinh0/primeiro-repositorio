/* Objeto é uma estrutura que permite organizar dados na forma de chave-valor*/

let end = {
    rua: 'Rua',
        numero: 456,
        estado: 'BH',
        complemento: 'Sem complemento',
        cep: '12310-000',
}
let pessoa = {
    nome: 'joana',
    idade: 23,
    cpf: '123.123.123.11',
    altura: 156,
    endereco: end,
    solteiro:  true,
    habilidades: ['React', 'java', 'Javascript', 'Golan', 'Rust'],
    cumprimentar(){
        console.log(`Ola, tudo bem meu nome é ${this.nome}, tenho ${this.idade}`)
    },
}
console.log(end)
console.log(pessoa.cumprimentar())