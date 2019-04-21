'use strict'

let pressnumber = [];
let numerosparaoperar =[];
let operacionfinal = [];

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
            numerosparaoperar.forEach(element => {
                if(element == 'x'){
                    let dato1 = parseInt(numerosparaoperar[numerosparaoperar.indexOf(element)-1]);
                    let dato2 = parseInt(numerosparaoperar[numerosparaoperar.length-2]);
                    let total = dato1 * dato2/100;
                    console.log(dato2);
                    document.querySelector('.resultados').innerHTML = "";
                    document.querySelector('.resultados').append(total);
                }
            });
        } 
    });
    operacionfinal.push(numerosparaoperar[numerosparaoperar.length-1])
    let total = operacionfinal.join().replace(/,/g, "");
    console.log(total);
    document.querySelector('.resultados').innerHTML = "";
    document.querySelector('.resultados').append(eval(total));
}
