
//               0        1         2          3           4
const nomes = ['Maria', 'João' , 'Eduardo', 'Gabriel' , 'Julia'];

//nomes.splice(indice, delete, elem1, elem2, elem3)
//nomes.splice(qual indice que quero começar a mexer , o segundo argumento quantos elementos quero remover, terceiro argumento adicionar)

const removidos = nomes.splice(4,1)
nomes.splice(4,1);  //remover indice 4 , quero remover 1 elemento
console.log(nomes, removidos);