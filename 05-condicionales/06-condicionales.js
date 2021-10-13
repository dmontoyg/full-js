'use strict'

// Condicional IF
// Si A es igual a B entonces que realice algo

// EJERCICIO #1
var edad1 = 30;
var edad2 = 12;

// Si pasa esto
    if(edad1 > edad2){
        // Ejecuta este mensaje
        console.log("Edad uno es mayor que edad2");
     }else{
         console.log("La edad dos es mayor");
    }




// EJERCICIO #2
var edad = 35;
var nombre = 'Diego Montoya';

// Operadores relacionales
// Mayo: >
// Menor: <
// Mayor o igual: >=
// Meno o igual: <=
// Igual =
// Distinto !=

if (edad >= 18) {
    // Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");

    if (edad <= 33) {
        console.log('Todavia eres Millenial');
    } else if (edad >= 70) {
        console.log('Eres un viejo');
    } else {
        console.log('Ya no eres un Millenial');
    }
} else {
    // Es menor de edad
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}