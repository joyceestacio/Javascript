/* ARRAY - lista de coisas*/ 

const alunos0 = []; // isso é um array

                 //0     //1    //2      //3
const alunos = ['joyce', 'ana', 'pedro', 'maria'];  // array de string - array tem posicoes(INDICE) 
console.log(alunos); // vem todos 
console.log(alunos[0]); // vai vir só a joyce
console.log(alunos.length); //pega o tamanho do array

alunos.push('Otavio') // adiciona no fim do array  push(add)
console.log(alunos);

alunos.unshift('Fabio'); // adiciona no inicio do array
alunos.unshift('Luiza');
console.log(alunos);

alunos.pop(); // remove o ultimo nome do array
console.log(alunos);
