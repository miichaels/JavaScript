let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);


// Nova forma
let varA1 = 'A'; // B
let varB1 = 'B'; // C
let varC1 = 'C'; // A

[varA1, varB1, varC1] = [varB1, varC1, varA1]

console.log(varA1, varB1, varC1)

