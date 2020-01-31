let varA = 'A'; // B 
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC);

const varATemp = varA;
 varA = varB; // B 
 varB = varC; // C
 varC = varATemp; // A
console.log(varA, varB, varC);