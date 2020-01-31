const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

console.log(pessoa); // exibindo no console direto

// jogando na variavel para exibir no console
const nome = pessoa.nome;
console.log(nome);

/** atribuição via desestruturação */
const { nome } = pessoa;
console.log(nome);

