console.log("Hola CH35");

/*
Control de flujo y estructuras de control
*
Las estructuras de control son un compnente fundamental dentro de la programación, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar codigo, podemos mencionar las siguientes:
- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
*/

/**
 * Declaración de sentencia if-else
*Palabra reservada if para comenzar la declaración se coloca con parentesis () donde se debe colocar una exprsión lógica (true|false), se abre y cierran llaves {} para indicar que sentencia va ejecutar si la condicion se cumple (true), 
*despues de la llave {} declarada para el bloque de ejucación if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar mas expresiones demtro de un () 
*simplemente colocamos otras llaves {} para indicar el bloque de código que tiene que ser ejecutado en caso de que la condición no se cumpla (false).

*/
let n = 15;
if (n>20){
    console.log(true);
} else{
    console.log(false);
}

/*
if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
 */

//If anidados
let edad = 58
if(edad<18){
    console.log("Eres menor de edad, retirate");
} else if (edad>=18&&edad<65) {
    console.log("Eres un adulto joven");
} else{
    console.log("Eres un adulto mayor");
} 


/*
*Sentencia switch
*La sentencia Switch es otro tipo de estructura de control de flujo, que , nuevamente se encuentra en diversos lenguajes de programación.
*Es bastante parecida a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcación (partición de caminos), sino que se secciona  en multiples casos (case) que, dependiendo de la expresion que cumpla con un caso especifica será nuestra secuencia que se va a ejecutar, dentro de la declaración.

*Declaración:
*se empieza a colocar la palabra reservada switch, seguido de esto, colocamos parentesis () donde se debe colocar el valor que va indicar sentencia/caso a ejecutar.
*Falta indicar un bloque de codigo que se limita a sentencia, como lo haciamos en la sentencia if o con las funciones.
*Dentro de este bloque de codigo, falta colocar los casos para cada valor que se desee establecer segun sea el valor indicado dentro del parentesis () .
*Cada uno de estos casps se separa de la siguiente manera:
*case valor: instrucción a ejecutar si el valor empata con este caso.
*Despues, para indicar que la ejecucón de las sentencias debe cortarse cuandos e cumpla, se coloca la instrucción *break
*Cuando terminemos de establecer Los casos que necesitamos declara, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.
*Esta ultima sentencia nos permite establecer un valor por otro dentro de la sentencia o en ninguno de los casos.
*default: mensaje no disponible.
*/


let dia = "sabado";
switch (dia){
    case "lunes":
        console.log("Odioh loh luneh");
        break;
    case "martes":
        console.log("2X1 en Dominos");
        break;
    case "miercoles":
        console.log("Proyecto :c");
        break;
    case "jueves":
        console.log("Jueves Casi Viernes");
        break;
    case "viernes":
        console.log("Viernes de mamarse");
        break;
    case "sabado":
        console.log("Sabado de Liguilla");
        break;
    case "domingo":
        console.log("Dormir");
        break;
        default:
        console.log("Dia desconocido");
        break;

} //termina switch

/*
* Operador ternario
* Expresion condicional if-else mas simple y legible
* Principalmente se usa para simplificar condiciones de una sola expresión.
* tambien puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el codigo se puede volver confuso y poco legible.
* Su declaración es la siguiente:
* Palabra reservada var, let o const:
* se le asigna un nombre como si se tratara de una variable, operador de asignación "=", seguido de este operador, hay que colocar una expresión logica, esta va dentro de un parentesis (), despues hay que colocar un caracter ? que indica el camino a seguir, dependiendo de si se cumple (o no) la expresión.
* Para separar el resultado true de false debemos  agregar un caracter de :, del lado izquierdo se coloca la sentencia a ejecutar.
* Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar
*/

// Ejemplo de operador ternario
let verification = n > 20 ? "Si es mayor" : "No es mayor"
console.log (verification);

/*
*Cuando usar if-else u cuando switch?
*if-else : cuando necesitamos tomar decisiones bajo condiciones mas flexibles.
*switch : cuando tengamos un conjunto fijo de valores para comparar una expresión.
*/

// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

let edadVotar=16
if (edadVotar>=18){
    console.log("Eres mayor de edad. Puedes votar.");
} else {
    console.log("Eres menor de edad, no tienes permiso para votar.");
} 

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

let numeroDivisible=224
if (numeroDivisible%7===0&&numeroDivisible%8===0) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

let numerodDivisible=20
if (numerodDivisible%4===0&&numerodDivisible%9===0) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}

/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

let pelicula = "accion";
switch (pelicula){
    case "accion":
        console.log("The Departed");
        break;
    case "drama":
        console.log("The Big Fish");
        break;
    case "comedia":
        console.log("Superbad");
        break;
    case "suspenso":
        console.log("Seven");
        break;
    case "terror":
        console.log("The Exorcist");
        break;
        default:
        console.log("Pelicula desconocida");
        break;

} 

/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */



/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
let cantidadEnPesos = 100;
let opcionDeConversion = 1;

function convertirDivisa(cantidad, opcion) {
    switch (opcion){
        case 1: let dolares=cantidad /18;
        console.log(cantidad + "pesos mexicanos son (aprox)" + dolares.toFixed + "dolares");
        break;
        
        case 2: let euros=cantidad /18;
        console.log(cantidad + "pesos mexicanos son (aprox)" + euros.toFixed + "euros");
        break;

        case 3: let libras=cantidad /21;
        console.log(cantidad + "pesos mexicanos son (aprox)" + libras.toFixed + "libras (esterlina)");
        break;

        case 4: let yenes=cantidad /0.12;
        console.log(cantidad + "pesos mexicanos son (aprox)" + yenes.toFixed + "yenes");
        break;

        case 5: let francos=cantidad /19;
        console.log(cantidad + "pesos mexicanos son (aprox)" + francos.toFixed + "francos (suizo)");
        break;
    }
}
