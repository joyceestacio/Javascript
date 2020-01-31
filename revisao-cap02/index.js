/** revisão do capitulo 02 **/

/** ARRAY */

/*EXIBIBINDO ARRAY*/
var array = ['Joyce', 'Ana', 'Pedro', 'Paulo', 'Magno', 'Julia'];
console.log(array); /** mostro todas as pessoas no array */

/*ADD ALGO NO ARRAY - FIM (ULTIMO) */
array.push('Adicionando alguém');
console.log(array); /** adicionei mais uma pessoa 'adicionando alguém' através do push */

/*ADD ALGO NO ARRAY - INICIO*/
array.unshift('adiciono no inicio do array');
console.log(array); /** unshift adiciona no inicio do array */

/*EXCLUINDO ALGO DO ARRAY - FIM (ULTIMO) */
array.pop([6]);
console.log(array);

/*TAMANHO DO ARRAY */
console.log(array.length); /** o length deve ser usado como nomeDoQueQuero.legth */

/*EXIBIR ALGO ESPECIFICO DO ARRAY*/
console.log(array[1]);


/** OBJETO */

/** EXEMPLO 01 */
var Pessoa = {
    nome: 'Joyce',
    idade: 27,
    uf: 'RJ',
}
console.log(Pessoa); /** exibo os conteudos do objeto */


/** EXEMPLO 02  ADICIONAR COISAS NO OBJETO */
function adicionarNoObjeto(carro, marca, cor) {

    return {
        carro,
        marca,
        cor,
    };
}

var carro1 = adicionarNoObjeto('Gol', 'Volks', 'Preto');
var carro2 = adicionarNoObjeto('Palio', 'Fiat' , 'Vermelho');
var carro3 = adicionarNoObjeto('Hb20', 'Hundai', 'Prata');

console.log(carro1.carro, carro1.marca, carro1.cor);
console.log(carro2.carro, carro2.marca, carro2.cor);
console.log(carro3.carro, carro3.marca, carro3.cor);





