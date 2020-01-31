/* array [] 
   objeto {} */

/*************************************************** */

/*  EXEMPLO 01

const pessoa1 = {   // objeto
     nome: 'joyce',    //atributo
     idade: 27,      //atributo
     cidade: 'rio',    //atributo
 };

 const pessoa2 = {   // objeto
    nome: 'pedro',    //atributo
    idade: 40,      //atributo
    cidade: 'sp',    //atributo
};

console.log(pessoa1.nome); 
*/


/**************************************************/


/*EXEMPLO 02

function criaPessoa (nome, idade, cidade) {
    return{
         nome, //atributo
         idade, //atributo
         cidade, //atributo
    };
}

const pessoa1 = criaPessoa('Joyce', 27, 'RJ');
const pessoa2 = criaPessoa('Pedro', 30, 'SP');
const pessoa3 = criaPessoa('Ana', 17, 'CE');
const pessoa4 = criaPessoa('João', 36, 'RS');
const pessoa5 = criaPessoa('Marcela', 50, 'AM');
const pessoa6 = criaPessoa('Yago', 60, 'AC');

console.log(pessoa1.nome, pessoa1.idade, pessoa1.cidade);
console.log(pessoa2.nome, pessoa2.idade, pessoa2.cidade);
console.log(pessoa3.nome, pessoa3.idade, pessoa3.cidade);
console.log(pessoa4.nome, pessoa4.idade, pessoa4.cidade);
console.log(pessoa5.nome, pessoa5.idade, pessoa5.cidade);
console.log(pessoa6.nome, pessoa6.idade, pessoa6.cidade);


/** funcao dentro de um objeto é um metodo  */

/*

/*************************************************************** */

/*EXEMPLO 03 */

const pessoa1 = {    //objeto
    nome: 'Luiz',     //atributo
    sobrenome: 'Miranda', //atributo
    idade: 25,  //atributo

    fala() {   //metodo 
        console.log(`${this.nome} ${this.sobrenome} possui ${this.idade} anos`);
    },

    icrementaIdade() {
        this.idade++;
    }
};


pessoa1.fala();
//pessoa1.idade();
pessoa1.icrementaIdade();