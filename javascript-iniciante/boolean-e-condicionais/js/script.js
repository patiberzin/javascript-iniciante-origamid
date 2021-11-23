var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
    console.log('Possui Graduação e Doutorado');
} else if(possuiGraduacao){
    console.log('Possui Graduação, mas não possui Doutorado');
} else {
    console.log('Não possui Graduação');
}

var nome = '';

if(nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}

var corFavorita = 'Azul';

switch(corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
        case 'Pink':
            console.log('Olhe para as rosas.');
            break;
            case 'Amarelo':
                console.log('Olhe para o sol.');
                break;
                default:
                    console.log('Feche os olhos.');
}

//Exercício
// Verifique se a sua idade é maior do que o de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual'.
var idadePati = 32;
var idadeMae = 67;
var idadePrima = 14;

if(idadePati > idadeMae) {
    console.log('É maior');
} else if(idadePati > idadePrima) {
    console.log('É maior');
} else {
    console.log('É menor');
}

//Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);
//retorna 3 - como ele não encontrou nenhum valor falso,
//ele retornou o último verdadeiro e fez a conta.

//Verifique se as seguintes variáveis são Truthy or Falsy
var nome = 'Pati'; // true
var idade = 32; // true
var possuiDoutorado = false; //false
var empregoFuturo; // false
var dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

//Compare o total de habitantes do Brasil com China (valor em mi)
var totalHabitBrasil = 212
var totalHabitChina = 1402

if(totalHabitBrasil > totalHabitChina) {
    console.log('O Brasil tem mais habitantes');
} else {
    console.log('A China tem mais habitantes');
}

//O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
//Falso. Retorna o primeiro valor falso.

//O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão'); 
} else {
    console.log('Falso');
}
//Cão. O primeiro é falso, o segundo é vdd
//vai para o primeiro console entre gato e cão
// o falso é Cão.



