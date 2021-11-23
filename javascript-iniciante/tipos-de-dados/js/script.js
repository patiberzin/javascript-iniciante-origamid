var nome = 'Pati';
console.log (typeof nome);

var time = null;
console.log (typeof time);

var nome = 'Patrícia';
var sobrenome = 'Berzin';
var nomeCompleto = nome + ' ' + sobrenome;

console.log (nomeCompleto);

var gols = '1000';
var frase = 'Romário fez ' + gols + ' gols';

console.log (frase);

var gols = '1000';
var frase3 = `Romário fez ${gols * 2} gols`;

console.log (frase3);


//Exercício:
var string = 'Pati futura Dev Junior';
var numString = '32';
var idade = 32;
console.log (string, numString, idade);
var nome = 'Patrícia';
var sobrenome = 'Berzin';
var nomeSobrenome = nome + ' ' + sobrenome;
console.log(nomeSobrenome);
var frase = "It's time";
console.log(frase);
console.log(typeof nome);

var nomeSobrenome = `${nome} ${sobrenome}`; //outra forma de concatenar
console.log(nomeSobrenome);