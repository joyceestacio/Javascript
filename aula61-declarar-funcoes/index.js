/** MANEIRAS DE DECLARAR FUNÇÕES */

// Declarações de função (Function hoisting) -- chama a função em cima da função


console.log('#############################################');
 
falaOi(); // chamei a função
function falaOi () {   //criei função
    console.log('Oie');
}
//falaOi(); // chamei a função

console.log('#############################################');


const souUmDado = function() { //variavel chama função
    console.log('teste');
}
souUmDado();

console.log('#############################################');

//ARROW FUNCTION

                    //function()                                   ()=> == function()
const funcaoArrow = () => {
    console.log('sou uma arrow function');
};
funcaoArrow();

console.log('#############################################');

const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};

obj.falar();

console.log('#############################################');

// função anonima 
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();