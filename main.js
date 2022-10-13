//Crea una lista con los siguientes elementos:

//- Tu nombre (string)

var nombre = "JuanJo";

//- Tu apellido (string)

var apellido = "Chiroque";

//- Tu edad (number)

var edad = 24;

//- ¿Eres desarrollador de aplicaciones web? (boolean)

var developer = true;

//- Tu fecha de nacimiento (Date)

var fecha = "06-09-1998";

//- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

var libro = {
    titulo:"Fundamentos de programacion",
    autor: "Luis Joyanes Aguilar",
    fecha: "01-01-2008"
};

//- Tu pasatiempos favoritos (Array)

var pasatiemposfav= ["correr","jugar futbol","codificar"] ;


//- Declara una funcion miActividadFavorita la cual retorne un string con la accion que mas te guste realizar */

function miActividadFavorita(){
    return "codificar"
};

console.log(miActividadFavorita());
