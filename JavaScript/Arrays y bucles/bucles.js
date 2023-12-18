console.log("Ahora hablamos de Bucles");

/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/*
*==== Ciclo for ====
Un ciclo for se repite hasta que la condicion se ebalue como false. Crea 3 expresiones opcionales
*Sintaxis
* for (expresioninicial; expresioncondicional; expresiónactualización){
    //Codigo a ejecutar en cada iteración del búcle
}

>-- 1 Inicialización: Se debe inicializar con una variable que sera evaluada en la expresión a comparar.
>-- 2 Condicion: es una expresión que debe cumplir la variable inicial (true), si no se cumple (false) el búcle termina.
>-- 3 Pasos a realizar: son los intervalos que cambiaran la variable inicial mientras esta sea true.
*/

//*Crear un programa para saber cuantos boletos vendemos para una rifa
for(let boleto=1; boleto<=15;boleto++){
    console.log(`Boleto # ${boleto}`);
}
//*Programa para vender bolos con una vvariable global
let bolos=1;

for (bolos;bolos<=20;bolos++){
    console.log(`Vendí ${bolos}`);
}

//*Cuenta regresiva
let cuentaRegresiva = 15;
for (cuentaRegresiva; cuentaRegresiva >=0;
cuentaRegresiva--){
        console.log(`Quedan ${cuentaRegresiva} paletas`);
    }
/*
*Recorrer arrays con el ciclo for
*Debemos usar indices del arreglo para poder usar el bucle en indices desde el 0 hasta n y usaremos la propiedad lenght
*/

const ch35=["Rodrigo", "Diego", "Ania", "Rey", "Arturo", "Eunice"];

for(let i= 0;i<ch35.length;i++){
    console.log(ch35[i]);
}
/**** Variaciones del ciclo for
-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/
const fruits = ["Apple", "Banana", "Orange"];
let fruta;
for (fruta of fruits) {
    console.log(fruta);
}

//* sumar numeros del 1 al 20 
let suma=0;
for (let i=1; i<=20; i++){
    suma += i;
}
console.log(suma);

//* Tabla 5
const tabla=5;
for (let i=1; i<=10; i++){
    let resultado=tabla * i;

    console.log (`${tabla} x ${i} = ${resultado}`);
}

/*
* Ciclo While
*Recorrer un bloque de codigo siempre que una condición especifica sea verdadera.
* Sirve para realizar una tarea repetitiva mientras una condición sea verdad
*/

let productos = 5;
while(productos > 0){
    console.log(productos + " productos vendidos");
    productos--;
}
//* imprimir numeros
let num1=0;
while(num1 < 10) {
    num1 ++
    console.log("El numero es " + num1);
}
/*
*Ejercicios de Bucles:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/
let sumar =0;
for(let i=1;i<=10; i++){
    sumar +=i;
}
console.log("La suma de los numeros del 1 al 10 es:", suma)

/*Ejercicio : Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/




/*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).*/
function generarFibonacci(n){
let fibonacciArray = [0,1];

for(let i=2; i<n; i++){
    const nuevoTermino=fibonacciArray[i-1]+fibonacciArray[i-2]; fibonacciArray.push(nuevoTermino);
}
return fibonacciArray;
}

const primerosDiezTerminos=generarFibonacci(10);

console.log("Los primeros 10 términos de la secuencia de Fibonacci:");
console.log(primerosDiezTerminos.join(", "));
/*Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/