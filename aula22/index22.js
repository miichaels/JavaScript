/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
!  -> NOT -> NÃO
*/

let numeroSorteado = Math.floor(Math.random() * 100) +1; //Sorteia um numero aleatório de 1 a 100
console.log('Número sorteado:', numeroSorteado);

function testSol(sol){
    let result;
    if(sol == 1 || sol == 2 || sol == 3 || sol == 4 || sol == 5){
    result = 'Positive'; 
    } else {
    result = 'Not positive';
    }
    return result;

}

console.log(testSol(numeroSorteado));