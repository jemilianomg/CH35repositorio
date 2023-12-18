/*Operador
Es un signo que especifica que debe efectuar una determinada operación
*/

/* 
Operadores aritmeticos (+,-,*,/,%,++,--)
Operadores de asignación (=)
Operadores de comparación (==,===,!=,!==,<,>,>=,<=)
Operadores de cadena (toLowerCase, toUpperCase, trim, toSptring, concat, +)
*/

/*
Operadores aritmeticos
(+): Se utiliza para sumar dos numeros
(-): resta, se utiliza para restar un numero de otro
(*): multiplicación, se utiliza para multiplicar dos numeros
(/): division, se utiliza para dividir un numero entre otro
(%): residuo, se utiliza para obtener el resto de una division
(++): incremento, aumente de uno en uno la cantidad o el numero
(--): decremento, disminuye de uno en uno la cantidad o el numero

*/

let numero1 = 10;
let numero2 = 8;

suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
residuo = numero1 % numero2;
incremento = numero1;
incremento++;
decremento = numero2;
decremento--;


console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(residuo);
console.log(incremento);
console.log(decremento);

let precioReal = 1000;
let porcentajeDescuento = 20;

let cantidadDescuento = (precioReal * porcentajeDescuento) / 1000;
let precioConDescuento = precioReal - cantidadDescuento;

console.log("Precio Real:$" + precioReal);
console.log("Porcentaje de descuento:" + porcentajeDescuento + "%");
console.log("Cantidad de descuento:$" + cantidadDescuento);
console.log("Precio con descuento:$" + precioConDescuento);



/*Operadores de asignación
=: Este operador no compara, lo que hace es asignar*/

//let frutas=manzana;

/*Operadores de comparción
(==): Igualdad compara si nuestros valores son iguales
*/
let numero3 = 10;
let texto = "10";

console.log(numero3 == texto);

/*+(===): Igualdad estricta, compara si los valores son iguales y el tipo de dato*/

let numero4 = 10;
let texto1 = "10";

console.log(numero4 === texto1);

/*(!=):Desigualdad o distinto este operador verifica si dos valores no son iguales y de ser necesario realiza la conversión*/

let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja != precioMaximo) {
    console.log("El precio del producto no es igual al precio maximo");
} else {
    console.log("El precio del producto es igual al precio maximo permitido");
}

/* (!===)Desigualdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos deben tener el mismo tipo y valor */

let numero5 = 15;
let numero6 = "15";

if (numero5 != Number(numero6)) {
    console.log("Son diferentes");
} else {
    console.log("Los valores son iguales");

}

/*
(!==) Desigualdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor
*/
//conversión de valores de string a number


let num7 = 41;
let num8 = "50";

if (num7 !== num8) {
    console.log("Los valores son diferentes");
} else {
    console.log("Los valores son iguales");
}


/*En igualdad: ==, y desigualdad: !=
En igualdad estricta: ===, y desigualdad estricta: !==
(Es como sustituir el primer "=" por un "!")*/

//(<): Mayor que basicamente nos indica si un valor es mayor que otro
let puntuacionFinal = 85;
let puntuacionRequerida = 102;

console.log(puntuacionFinal > puntuacionRequerida);

//(>=): Menor que nos indica si un valor es menor que otro
let anios = 20;
let edadLimite = 30;

console.log(anios < edadLimite);

///(>=) Mayor o igual que nos dice si un valor es mayor o igual a otro
let edad = 18;
let edadNecesaria = 18;

console.log(edad >= edadNecesaria);

//(<=)Menor o igual que y nos indica si un valor es menor o igual al otro

let temperatura = 14;
let temperaturaMaxima = 21;

console.log(temperatura <= temperaturaMaxima);

/*
 * ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro


let valor1 = prompt ("Ingresa un número");
let valor2 = prompt ("Ingresa otro número");

valor1=parseFloat(valor1);
valor2=parseFloat(valor2);

// if(valor1 === valor2){
//     console.log("Los dos numeros que ingresaste son iguales");
// } else if (valor2 < valor1){
//     console.log('valor2 es menor al valor1');
// }else {
//     console.log('el valor 1 es mayor al valor 2');
// }

/*
 * ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no

let palabra1 = prompt("Ingrese una palabra");
let palabra2 = prompt("Ingresa otra palabra");

if(palabra1 === palabra2) {
    console.log("Las palabras son iguales");
} else {
    console.log("Las palabras son diferentes");
}
/*Operadores logicos
(&&) AND se utilizan cuando las dos condiciones deben cumplirse
*/
let mayoriaDeEdad = 18;
let tieneIdentificacion = true;

if (mayoriaDeEdad >= 18 && tieneIdentificacion) {
    console.log("Puedes rentar el salón");
} else {
    console.log("No lo puedes rentar");
}

/*(||) OR se utiliza cuando se debe cumplir una condicion u otra
*/
let esPrime = false;
let descuento = true;

if (esPrime || descuento) {
    console.log("Califica para descuento");
} else {
    console.log("No califica para descuento")
}

//(!) NOT se utiliza para negar el valor de una condicion

let esDiaLibre = false;
if (!esDiaLibre) {
    console.log("Se trabaja");
} else {
    console.log("Descansito");
}

//Operadores de cadena

//toLowerCase hace el cambio de nuestro string a minusculas

let mensajeUsuario = "Bienvenidx a la tierra";
let cambioMinusculas = mensajeUsuario.toLowerCase();

console.log(cambioMinusculas);

//toUpperCase hace el cambio de nuestro string a mayusculas

let mensajeUsuario2 = "Bienvenides a le tierre";
let cambioMayusculas = mensajeUsuario2.toUpperCase();

console.log(cambioMayusculas);

//trim quita los espacios

let aviso = "       CH35    "
let sinEspacios = aviso.trim();

console.log(sinEspacios);

//toString convierte un tipo de dato number en string

let numero10 = 31;
let cadenas = numero10.toString();

console.log(cadenas);

//concat

let nombre = "Emiliano";
let apellido = " Madrigal";
let nombreCompleto = nombre.concat("", apellido);

console.log(nombreCompleto);

/* Expresiones  

----> expresion aritmetica

let operacion = 14 + 25 * 12; combina la suma con la multiplcación

----> expresion en cadena

let notificacion = "Casi, " + "Anio nuevo"; expresion concatenando

----> expresion logica

let esMayorDeEdad = (23 > 18) && (23 < 65); tiene operadores logicos y de comparacion

----> expresion de asignacion

let frasco = nutella; asigna el valor a la variable (let)

*/


const harina = 500;
const leche = 350;
const huevo = 2;
const mantequilla = 20;

const harinaDisponible = 1000;
const lecheDisponible = 1000;
const huevosDisponibles = 3;
const mantequillaDisponible = 15;

if (
    harinaDisponible >= harina &&
    lecheDisponible >= leche &&
    huevosDisponibles >= huevo &&
    mantequillaDisponible >= mantequilla
) {
    console.log("¡Tienes suficientes ingredientes para hacer hotcakes!");
} else {
    console.log(
        "No tienes suficientes ingredientes para hacer hotcakes. Compra lo que te falta."
    );
}