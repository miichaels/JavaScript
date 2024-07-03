const numero = Number(prompt('Digite um numero'));

const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Seu numero -5 é ${numero -5}. </p>`