/** LET X VAR */

// 1) consigo redeclarar a variavel com var já com let não consigo 

// 2) let tem escopo de bloco { ... bloco }

// 3) Var só tem escopo de função


/** -----EXEMPLO 1----- */

/*
let nomeA = 'joyce'
console.log(nomeA);

/*let nomeA = 'sena';   acontee erro ao tentar redeclarar a variavel com LET
console.log(nomeA); */

/* var nomeB = 'Ana';
console.log(nomeB);  */

/* var nomeB = 'Souza'; consigo redeclarar a variavel que antes se chamava ANA e agora se chama SOUZA
console.log(nomeB); */



/** -----EXEMPLO 2----- */

/*
const verdadeira = true;

let nome = 'Ana'; //criando  .. não é a mesma variavel de baixo
var nome2 = 'Ana';

if (verdadeira) {
    let nome = 'Otavio';  //criando .. não é a mesma variavel de cima
    console.log(nome, nome2);
}

if (verdadeira) {
    let nome = 'Maria'; //criando .. não é a mesma variavel de cima
    console.log(nome, nome2);
} /*


/** -----EXEMPLO 3-------- */

/*
const verdadeira = true;

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio';  //criando 
    var nome2 = 'Rogerio'; //redeclarando

    if (verdadeira) {
        var nome2 = 'Ronaldo';  //criando 
        let nome = 'Outra coisa'; //redeclarando
    }
}

console.log(nome, nome2); // luiz , Ronaldo */

/** VAR NO ESCOPO GLOBAL */

var sobrenome = 'Miranda'; // FICAR DO LADO DE FORA CONSIGO ACESSAR O CONSOLE.LOG DE QUAQLUER LUGAR

function falaOi() {
}
console.log(sobrenome); // CONSIGO ACESSAR 

falaOi();


/** VAR DENTRO DA FUNÇÃO SÓ ACESSO ALI DENTRO */

function falaOi() {
    var sobrenome = 'Miranda'; // FICAR DO LADO DE DENTRO CONSIGO ACESSAR O CONSOLE.LOG SÓ DE DENTRO DA FUNÇÃO
}
console.log(sobrenome); // CONSIGO ACESSAR 

falaOi();


