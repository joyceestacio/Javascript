/** OPERADOR TERNÁRIO
 
 ? :
 ? verdadeiro   : se for falso
 
 */

 const pontuacaoUsuario = 500;
 const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
 console.log(nivelUsuario);

 const corUsuario = null;
 const corPadrao = corUsuario || 'Preta';
 console.log(nivelUsuario, corPadrao);
