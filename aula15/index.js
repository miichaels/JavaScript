let num1 = 9.5435;

//Arredonda o numero para baixo
//let num2 = Math.floor(num1);

//let num2 = Math.ceil(num1);  //Arredonda o numero para cima

//arredonda da metade para baixo < e .50 para cima arrendonda para >
let num2 = Math.round(num1);

//max == numero maior
console.log(Math.max(1,2,3,4,5,56,755));

//min == numero menor
console.log(Math.min(1,2,3,4,5,56,755));

//Math.random - sorteia numeros aleatorios / Math.round tira as casas decimais
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);

console.log(aleatorio);