let umaString = "Um texto";

//indice
console.log(umaString[4]);

//saber aonde está o inicio do texto (indice)
console.log(umaString.indexOf('texto'));

//saber aonde está o texto  'o' (indice)
console.log(umaString.lastIndexOf('o'));

//replace
console.log(umaString.replace(/Um/, 'Outro'));

//Upercase e Lowercase
console.log(`UperCase:`, umaString.toUpperCase());
console.log(`LowerCase:`,umaString.toLowerCase());


console.log(umaString.concat( ' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

