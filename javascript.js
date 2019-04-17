'use strict'

let pressnumber = [];

function addpantalla(numero){
    pressnumber.push(numero);
    let dato = pressnumber.join().replace(/,/g, "");
    console.log(dato);
    if(dato.length<=8){
        document.querySelector('.resultados').innerHTML = "";
        document.querySelector('.resultados').append(dato);
    }
}

function resetearpantalla(){
    pressnumber = [];
    document.querySelector('.resultados').innerHTML = "";
}

function operadores(operador){
    pressnumber = [];
    document.querySelector('.resultados').innerHTML = "";
    document.querySelector('.resultados').append(operador);
}
