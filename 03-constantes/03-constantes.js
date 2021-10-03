"use strict"

//Constantes
// Como una variable, pero su valor no puede cambiar o modificar más adelante
// ejemplo

var web = "http://wwww.google.com.co";
const ip = "10.1.1.1";

web = "http://www.hotmail.com.co";

// este código no se puede realizar, saldrá un error en consola: "Assignment to constant variable."
// ip = "232323";

console.log(web,ip);