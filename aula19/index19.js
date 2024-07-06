/*Primitivos (imutáveis) - String, number, boolean, undefined, null
(bigint, symbol) - Valor

Referência (mutável) - Array, object, function
*/

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4); //adiciona o 4
console.log(a, b);

b.pop(); //remove o 4
console.log(a, b);