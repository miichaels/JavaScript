//Michael Silva tem 26 anos e tem 1.79 de altura com isso seu IMC é ...

const nome = 'Michael';
const sobrenome = 'Silva';
const idade = 26;
const peso = 84;
const altura = 1.79;
let imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2024 - idade;


console.log(nome, sobrenome, 'tem', idade, 'anos e tem', altura, 'de altura, com isso seu IMC é', imc);
console.log('Michael nasceu em', anoNascimento,'.');


//Forma mais atual de passar variaveis
console.log(`${nome} ${sobrenome} tem ${idade} anos e tem ${altura} de altura, com isso seu IMC é ${imc}`);
console.log(`Michael nasceu em ${anoNascimento}.`);