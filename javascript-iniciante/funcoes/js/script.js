function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));

//outra

function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log(total);

//outra

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.8))

/*imc(80, 1.80)
imc(60, 1.70)
console.log(imc)*/

//outra

addEventListener('click', function(){console.log('Oi')});

//ou

function mostraConsole() {
    console.log('Oi')
}

addEventListener('click', mostraConsole);

//outra

function terceiraIdade(idade) {
    if(typeof idade != 'number') {
        return 'Informe a sua idade';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
terceiraIdade(60)

//outra

function idoso(suaIdade) {
    console.log(typeof suaIdade);
    if(suaIdade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(idoso(60))

