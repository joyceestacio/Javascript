// Consegue manipular a variável victor

function func1(){

    var victor = "Lima"; //variavel local
  
    console.log(victor);
  
  }
  
  
  // NÃO Consegue manipular a variável victor
  
  function func2(){
  
    console.log(victor);
  
  }
  
  
  // NÃO Consegue manipular a variável victor
  
  function func3(){
  
    console.log(victor);
  
  }


  /* Uma variável é local quando ela é declarada dentro de alguma função, pois isso significa 
   que apenas aquela função consegue enxergá-la. As demais funções do script não conseguem utilizá-la,
   pois a mesma foi declarada dentro de uma função específica. Neste ponto de vista, podemos dizer 
   que o escopo local é completamente diferente do escopo global. Abaixo vamos ver um exemplo de uma 
   variável declarada localmente com var. */


   /* Como você pode ver nos exemplo de código acima a func2 e a func3 não conseguem acessar a variável
    victor, pois ela foi declarada dentro do corpo da func1. O mesmo comportamento se repete para 
    variáveis declaradas com let, até agora, nada de diferente. */
    

