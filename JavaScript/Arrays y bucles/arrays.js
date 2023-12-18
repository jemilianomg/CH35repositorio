/*
+==Arrays=
+Es una colección o agrupación de elemntos en una misma variable, cada uno de ellos ubicado por la posicion que ocupa el array.
+Los Arrays se utilizan para almacenar y organizar datos de manera mas eficiente.
*/
//* Crear un Array
const numeros =[1, 2, 3, 4, 5];

//*Array de cadena de texto
const comida = ["tacos", "sopita", "pan", "jugo"];
console.log(comida);

//*Array mixto
const mixto =[
    "Pluma",
    8,
    true,
    { nombre:"Mar"}
];
console.log(mixto);

//*Array vacío
const lista = [];
console.log(lista);
//*Agregar elementos a mi array vacio
lista[0]="Leche";
lista[1]="Carne de pollo";
lista[2]="Espinaca";
lista [3]="Huevo";
console.log(lista);

//*Otra manera de crear Arrays
const frutas = new Array("Manzana", "Naranja", "Peras", "Mandarinas", "Uvas");
/*
*Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar a un nuevo Objeto de tipo Array.
*/
console.log(frutas);

//*Longuitud de un array
console.log(frutas.length);
//* Acceder a los elementos del Array, aorde a su indice
console.log(frutas[3]); //mandarinas
console.log(frutas[5]); //undefined

//*Modificar un elemento del array por el indice
const cremeria = ["Jamon", "Salchicha", "Queso adobera", "Queso cotija", "Yogurt" ];
console.log(cremeria);
//*cambiamos un elemento de queso o quesillo
cremeria[2]="Quesillo";
cremeria[4]="Danonino grande"
console.log(cremeria);

//*Arreglo de arreglos o multidimensional
console.log("Arreglo de arreglos");

//* Estados : Estado de México, Guadalajara, Yucatan, Sonora, Oaxaca, CDMX.

//*Platillos: Guajolocombo, Torta ahogada, Panuchos, Dogos, Tlayuda, Tacos.

const estados= ["Estado de México", "Jalisco", "Yucatan", "Sonora", "Oaxaca", "CDMX"];
const platillos= ["Guajolocombo", "Torta Ahogada", "Panuchos", "Dogos", "Tlayuda", "Tacos"];
const menu = [estados, platillos];
//*En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.
console.log (`En ${menu[0][2]} se come ${menu[1][2]}`);

/*
*Metodos de Arrays
*Metodo de cola (queue). Los metodos de cola implican agregar elementos al final del array y eliminar elementos al inicio del array. Sigue el principio de FIFO (First-in-first-out) lo que significa el primer elemento añadido es el primer elemento eliminado.
* push
* shift
* unshift

*Metodo de pila (stack). Implica agregar elementos al final del arrayy eliminar elementos del final del array. Sigue el principio LIFO (Last-in-first-out) que significa el ultimo elemento añadido es el primero en ser eliminado.
*
* push
* pop

*/
console.log("Metodo de Arrays");
const ch35 = ["Dany", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
console.log(ch35);
//*pop() Eliminar el ultimo elemento del array 
let popch35 = ch35.pop();
console.log(popch35); //vuelve el dato eliminado
console.log(ch35) //elimina el ultimo dato de la lista

//*push ()Agregar al final de array
let pushch35=ch35.push("Romina");
console.log(ch35);

//*shift() quitar primero del array
let shiftch35=ch35.shift();
console.log(ch35);

//*unshift agregar al principio del array
let unshiftch35=ch35.unshift("Dany", "Enrique");
console.log(ch35);

//*reverse () cambia el sentido dek ordenamiento del array
let reversech35=ch35.reverse();
console.log(ch35);

/*
*Investigar:
*sort
*forEach
*slice
*splice
*indexOf
*/

/*
*Ejercicios
*Ejercicio de Arrays:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/
const temperaturasCelsius =[22, 25, 19, 30, 27, 21, 18];

function celsiusToFahrenheit(celsius){
    return celsius *(9/5) + 32;
}

const temperaturasFahrenheit=[];

for (let i=0;i<temperaturasCelsius.length;i++){
    const temperaturasCelsius = temperaturasCelsius[i];
    const temperaturasFahrenheit=celsiusToFahrenheit(temperaturasCelsius);
    temperaturasFahrenheit.push(temperaturaFahrenheit);
}
console.log([22], temperaturasCelsius);
console.log([22], temperaturasFahrenheit);