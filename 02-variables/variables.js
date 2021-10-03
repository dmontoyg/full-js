// Para adecuar a los estandares y ser más estrictos en el código, para eso sirve el use strict
'use strict'
// VARIABLES
// Una variable es un contenedor de información

/*
Var es una variable global y local
Let, mientras que Let, solo es una variable local -- IMPORTANTE
*/

let prueba = "hola";
var pais = "Colombia";
var continente = "Sur America";
var antiguedad = 2016;
var pais_y_continente = pais+' '+continente;

pais = "Argentina";
continente = "Latinoamerica";

console.log(pais, continente, antiguedad);
alert (pais_y_continente);