// FUNÇÃO CONSTRTUTORA

/* Função construtora -> objetos
Função fabrica -> objetos
Construtora -> começa com letra Maiuscula  Pessoa (new)  "molde para gerar novos objetos"

*/


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => { //arrow function
       console.log('sou um metodo');
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');   //construtor tem new 
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();

console.log(p1.nome);


//metodo é uma função dentro do objeto