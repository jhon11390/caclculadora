'use strict'

let pressnumber = [];
let numerosparaoperar =[];
let operacionfinal = [];
let resultados = [];
let simbolos = document.querySelectorAll('.simbolos');
let numeros = document.querySelectorAll('.unidad');

function addpantalla(numero){
    pressnumber.push(numero);
    let dato = pressnumber.join().replace(/,/g, "");
    console.log(dato);
    if(dato.length<=8){
        document.querySelector('.resultados').innerHTML = "";
        document.querySelector('.resultados').append(dato);
    }
    numerosparaoperar.push(dato);
    
    console.log(numerosparaoperar);
}

function resetearpantalla(){
    numerosparaoperar.splice(0, numerosparaoperar.length);
    pressnumber.splice(0, pressnumber.length);
    operacionfinal.splice(0, operacionfinal.length);
    resultados.splice(0, resultados.length);
    document.querySelector('.resultados').innerHTML = "";
    simbolos[0].setAttribute('onclick', 'operadores("%")');
    simbolos[1].setAttribute('onclick', 'operadores("√")');
    simbolos[2].setAttribute('onclick', 'operadores("+")');
    simbolos[3].setAttribute('onclick', 'operadores("-")');
    simbolos[4].setAttribute('onclick', 'operadores("x")');
    simbolos[5].setAttribute('onclick', 'operadores("/")');
    simbolos[6].setAttribute('onclick', 'resultadototal()');
    numeros[0].setAttribute('onclick', 'addpantalla("9")');
    numeros[1].setAttribute('onclick', 'addpantalla("8")');
    numeros[2].setAttribute('onclick', 'addpantalla("7")');
    numeros[3].setAttribute('onclick', 'addpantalla("6")');
    numeros[4].setAttribute('onclick', 'addpantalla("5")');
    numeros[5].setAttribute('onclick', 'addpantalla("4")');
    numeros[6].setAttribute('onclick', 'addpantalla("3")');
    numeros[7].setAttribute('onclick', 'addpantalla("2")');
    numeros[8].setAttribute('onclick', 'addpantalla("1")');
    numeros[9].setAttribute('onclick', 'addpantalla("0")');
    numeros[10].setAttribute('onclick', 'addpantalla(".")');

}


function operadores(operador){
    pressnumber = [];
    document.querySelector('.resultados').innerHTML = "";
    document.querySelector('.resultados').append(operador);
    numerosparaoperar.push(operador);
}

function resultadototal(){
    numerosparaoperar.forEach(element => {
        if(element == '+'){
            operacionfinal.push(numerosparaoperar[numerosparaoperar.indexOf(element)-1]);
            operacionfinal.push(element);
            numerosparaoperar.splice(numerosparaoperar.indexOf(element),1,'mas');
        } else if(element == '-'){
            operacionfinal.push(numerosparaoperar[numerosparaoperar.indexOf(element)-1]);
            operacionfinal.push(element);
            numerosparaoperar.splice(numerosparaoperar.indexOf(element),1,'menos');
        } else if(element == 'x'){
            operacionfinal.push(numerosparaoperar[numerosparaoperar.indexOf(element)-1]);
            operacionfinal.push('*');
            numerosparaoperar.splice(numerosparaoperar.indexOf(element),1,'por');
        } else if(element == '/'){
            operacionfinal.push(numerosparaoperar[numerosparaoperar.indexOf(element)-1]);
            operacionfinal.push(element);
            numerosparaoperar.splice(numerosparaoperar.indexOf(element),1,'division');
        } else if(element == "√"){
            operacionfinal.push(Math.sqrt(numerosparaoperar[numerosparaoperar.indexOf(element)+1]));
            numerosparaoperar.splice(numerosparaoperar.indexOf(element),1,'raiz');
        } else if(element == '%'){
            operacionfinal.push(numerosparaoperar[numerosparaoperar.indexOf(element)-1]);
            operacionfinal.push('%');
            numerosparaoperar.splice(numerosparaoperar.indexOf(element),1,'porcentaje');
        } 
    });
    console.log(operacionfinal);
    console.log(numerosparaoperar);
    operacionfinal.push(numerosparaoperar[numerosparaoperar.length-1]);
    let total = operacionfinal.join().replace(/,/g, "");
    resultados.push(eval(total));
    console.log(resultados);
    console.log(total);
    document.querySelector('.resultados').innerHTML = "";
    document.querySelector('.resultados').append(eval(total));
    simbolos.forEach(element => {
        element.setAttribute('onclick', null);
    });
    numeros.forEach(element => {
        element.setAttribute('onclick', null);
    });
    numeros[11].setAttribute('onclick', 'resetearpantalla()')
}
