//comentarios de una sola linea

/*comentarios multilineales*/



//alert("Hola mundo")


//conosle.log("Este es un mensaje para mi consola")


/*var nombre= prompt("Ingresa tu nombre");
alert("Hola, "  + nombre +  "Bienvenido a la ch35");*/


//var numero1=parseInt(prompt("Ingresa el primer número:"));
//var numero2=parseInt(prompt("Ingresa el segundo número:"));

/*console.log("suma:"+(numero1+numero2));
console.log("resta:"+(numero1-numero2));
console.log("multiplicación:"+(numero1*numero2));
console.log("división:"+(numero1/numero2));*/


//Pedir al ususario que ingrese la edad
/*var edad=prompt("Por favor, ingrese su edad");

//Verificar si la entrada es nula o no es un número
if(edad===null||isNaN(edad)) {
    alert("Por favor, ingrese una edad válida.");
} else{
    //Convertir la entrada a un número entero
    edad=parseInt(edad);

//Verificar la edad y mostrar la alerta correspondiente
if(edad<18){
    alert("Eres menor de edad.");
} else if (edad>=18&&edad<65){
    alert("Eres mayor de edad");
} else{
    alert("Eres un adulto mayor.");
}
}*/


//TIPOS DE DATOS Y VARIABLES

//scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance 
var tiene un alcance global
let tiene un alcnace local
const se mantiene sin ningun cambio*/

/*string:cadena de texto (lleva comillas)
number: numero
boolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

// Todas nuestras variables deben ser declarados con nombres especificos y claros, sin espacios, no deben iniciar con numeros

// let nombre="Romina";
// let invitadxsExtras=2;
// let esMayorEdad=true; let edad=24;
// let invitadxEspecial=null;
// let horadDeSalida=undefined;

// document.write(nombre); 

// Encasillamiento o tipado: Es util para el mantenimiento del código ya que lo hace más legible y facil de entender. Tambien nos ayuda a la prevención de errores para reducir la probabilidad de los mismos mejora el rendimiento de nuestro programa

// let numero = 15;
// let texto = "hola"; 

////con encasillamiento

// let numeroEncasillado= number =5;
// let textoEncasillado= string ="hola";

// typeof palabra reservada para saber que tipo de datos tenemos

/*console.log(typeof(nombre))

let funcionNumber = console.log (typeof Number(nombre));
metodoParseInt=console.log(typeof parseInt(nombre));
metodoParseInt=console.log(typeof parseFloat(nombre));*/


// parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en números, ambas nos ayudan a este cambio



// conversion de number a string

/*console.log(typeof String(edad));
console.log(typeof edad.toString())

conversión de boolean a número

let numero = Number (esMayorEdad);
console.log(numero);

let texto = String(esMayorEdad);

console.log(typeof(texto));
console.log(typeof esMayorEdad.toString());

let negación = !esMayorEdad;

console.log(negación);*/

//concatenar basicamente unir strings

/*let saludo = "Hola humanes ";
let frase = "el futuro es hoy, oiste viejo";

texto= saludo + frase;

console.log(texto);*/



// let harina = parseInt ("150");
// let huevo = parseInt ("1");
// let mantequilla = parseInt ("5");
// let leche = parseInt ("500");

// let nutella = 50;
// console.log(typeof(toString(nutella)))

// console.log(typeof(harina));
// console.log(typeof(huevo));

// let pasoUno = "Paso 1: Vierte todos los igredientes en la licuadora y mezcla hasta lograr una consistencia homogenea. ";
// let pasoDos = " <br> Paso 2: Despues, caliente un sarten con un poco de mantequilla. ";
// let pasoTres = " <br> Paso 3:Posteriormente, sirve la mezcla de masa para hotcake al centro del sarten dejandola caer suavemente. ";
// let pasoCuatro = " <br> Paso 4: Manten a flama baja y voltea una vez que aparezcan burbujas de aire. ";
// let pasoCinco = " <br> Paso 5: Ahora, repite agregando mantequilla al sarten cada vez que sea necesario. ";
// let pasoSeis = " <br> Sirve y dsifruta";

// let texto = pasoUno + pasoDos + pasoTres + pasoCuatro + pasoCinco + pasoSeis
// document.write(texto); 


/*Tipos de datos
>- String (cadenas de texto)
>- Number (numericos)
>- Booleans (booleanos: true or false)
>- Null (nulos)
>- Undefined (Indefinidos)
>- Objects (Objects)
>- Objects (Arrays)
*/

/*
console.log(); Nos permite visualizar en consola del navegador el codigo de JavaScript.
console.warn(); Muestra un mensaje de advertencia.
console.error(); Muestra un mensaje de error.
console.table();
*/

let firstName;
firstName= "Emiliano";
let lastName = "Madrigal";

console.log(firstName + " " + lastName);
console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName);

/*ECMAScrpit 6 (ES6). Interpolación de cadenas
> - backticks ``
> - Para variables ${}
> - Texto para string
*/
let age = 24;
console.log(`Mi nombre es ${firstName} y mi apellido es ${lastName} y tengo ${age} años`);


//console.warn();
console.warn(`Precuaución, no es buena páctica dejar sin punto y coma`);
console.error(`Status 404: Failed`);

/* Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
- Los arrays se pueden manipular mediante métodos específicos.
- Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.
- Un array posee "n" cantidad de elementos.
- Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento  con un tipo date.
*/

let arreglo1=[]; //Array vacío
console.log(`Array vacío ${arreglo1}`);
//Los elementos de un Array se separan mediante comas
let cars=["Volkswagen", "BMW", "Mazda", "Kia"]; //Array de String
console.log(cars);
//Longuitud e indice son diferentes. La longuitud (lenght) es el número de elementos y el índice corresponde a cada elemento a partir del 0.

console.log(typeof(cars));

//Array de Numbers
let salariesMxn = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200];
console.log(salariesMxn.length); //Output: 12
console.log(salariesMxn);

/*
Objetos. Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves (claves) y valores.
Su sintaxis es la siguiente
    const object = {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2)
    }  
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
    firstName: "Jesus Emiliano",
    lastName: "Madrigal",
    age: 24,
    country: "Mexico",
}

console.log(employee);

//Mostrando mi array como table
console.table(cars);
//Mostrando mi objeto como tabla
console.table(employee);