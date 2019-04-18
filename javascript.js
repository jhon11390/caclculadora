'use strict'

let pressnumber = [];
let numerosparaoperar =[];

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
    document.querySelector('.resultados').innerHTML = "";
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
            let dato1 = parseInt(numerosparaoperar[numerosparaoperar.indexOf(element)-1]);
            let dato2 = parseInt(numerosparaoperar[numerosparaoperar.length-1]);
            let total = dato1 + dato2;
            document.querySelector('.resultados').innerHTML = "";
            document.querySelector('.resultados').append(total);
        } else if(element == '-'){
            let dato1 = parseInt(numerosparaoperar[numerosparaoperar.indexOf(element)-1]);
            let dato2 = parseInt(numerosparaoperar[numerosparaoperar.length-1]);
            let total = dato1 - dato2;
            document.querySelector('.resultados').innerHTML = "";
            document.querySelector('.resultados').append(total);
        } else if(element == 'x'){
            let dato1 = parseInt(numerosparaoperar[numerosparaoperar.indexOf(element)-1]);
            let dato2 = parseInt(numerosparaoperar[numerosparaoperar.length-1]);
            let total = dato1 * dato2;
            document.querySelector('.resultados').innerHTML = "";
            document.querySelector('.resultados').append(total);
        } else if(element == '/'){
            let dato1 = parseInt(numerosparaoperar[numerosparaoperar.indexOf(element)-1]);
            let dato2 = parseInt(numerosparaoperar[numerosparaoperar.length-1]);
            let total = dato1 / dato2;
            document.querySelector('.resultados').innerHTML = "";
            document.querySelector('.resultados').append(total);
        } else if(element == "√"){
            let dato1 = parseInt(numerosparaoperar[numerosparaoperar.length-1]);
            let total = Math.sqrt(dato1);
            document.querySelector('.resultados').innerHTML = "";
            document.querySelector('.resultados').append(total);
        } else if(element == '%'){
            document.querySelector('.resultados').innerHTML = "";
            document.querySelector('.resultados').append('DISABLED');
        }
    });
}
