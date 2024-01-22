/* paradigmas de programación

Programación imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada

Programacion basada en eventos:  Se basa en la gestion y respuesta de eventos.

Programación declarativa: Explicar lo que queremos obtener.

Programación orientada a objetos: Toma cierta información o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos).

*/

//Clases: Plantillas para crear objetos. Nos ayuda a definir un tipo de objeto y crear instancias de este tipo de objeto.


class persona {
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    //objetos
    //El constructor es una funcion especial, cuya finalidad es la de construir o instanciar objetos.
    //para inicializar un objeto es necesario definir un constructor que tomara los atributos
    //clases = molde Objeto = gomita constructora chefsitx atributos = ingredientes metodos = comportamientos

    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    comer() {
        console.log("Bon apetit");
    } // metodo comer

    bailar() {
        console.log("Dale hasta el suelo pa");
    } //metodo bailar

    ejercicio() {
        console.log("Piensa en tu nena, piensa en tu ex");
    }

    fumar() {
        console.log("No haga eso compa");
    }
    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
    }
}


let usuario1 = new persona("Emiliano", "Madrigal", 24, "emi@gmail.com", "55789456");
let usuario2 = new persona("Andres", "Lopez", 70, "la4trifa@gmail.com", "5584795612");
let usuario3 = new persona("Ana", "Arana", 26, "anitalavalatina@gmail.com", "5548963210");
let usuario4 = new persona("Cristiano", "Ronaldo", 38, "elbichoserresietesiu@gmail.com", "7777777");
let usuario5 = new persona("Natalie", "Portman", 42, "portman.nat@gmail.com", "5589745641");

console.log(usuario4); //imprimir el objeto completo
console.log(usuario2.email); //imprimir un atributo en especifico
console.log(usuario1.edad, usuario2.telefono, usuario3.email, usuario4.apellido, usuario5.telefono);



// console.log(usuario1.bailar);
// console.log(usuario2.ejercicio);
// console.log(usuario3.fumar);

usuario2.bailar(); //Invocar el metodo
usuario1.mostrarInfo();
console.log(usuario5.telefono, usuario1.email);


//Pilares de la programación orientada a objetos

/**
 * Herencia 
 * Polimorfismo
 * Encapsulamiento
 * Abstracción*/

//Herencia nos permite heredar clases inferiores para poder optimizar el programa

class arrendador extends persona { //subclase
    //extends para especificar que es una subclase 
    capacidad = 0;
    costo = "0";
    nombreLugar = "";

    constructor(nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar) {
        super(nombre, apellido, edad, email, telefono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;

    }




    mostrarInfo() {
        console.log("Capacidad", this.capacidad);
        console.log("Costo", this.costo);
        console.log("Nombre del lugar", this.nombreLugar);
    }

}

/*class arrendadorTepic extends arrendador {
    sub clase nieto
}*/

let arrendador1 = new arrendador("Chio", "Hernandez", 29, "lachio@gmail.com", "55894126", 100, 25000, "El Deshuesadero");

console.log(arrendador1);

console.log(arrendador1.nombreLugar);

arrendador1.mostrarInfo();


/*
Polimorfismo: Tener objetos de diferentes tipos que pueden ser manipulados en comun.
*/
class producto {
    
    marca = "";
    precio = 0;
    
    constructor(marca, precio){
    this.marca = marca;
    this.precio = precio;
    }


    mostrarDescripcion(){
        console.log("Marca");
        console.log("Precio");

    }
}

let producto1 = new producto ("cerave", 85);



//Encapsulamiento ocultar la implementación de un objeto y solo mostrar los datos necesario

class Usuario{
    #contraseña;

    constructor(userName, correo, contraseña){
    this.userName = userName;
    this.correo = correo;
    this.#contraseña = contraseña;
    }



verificarContraseña(contraseña){
    return this.#contraseña === contraseña;
}

}

//Abstraccion no es nada más que traer objetos del mundo real y poder aplicarlos a la programación mediante clases, metodos, constructores y objetos

//Losobjetos de tipo Json en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y el servidor. Esto gracias a que son mas flexibles y generalmente se ejecutan con fetch

let objetoJson={
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
}




















/*
class Animal {
    sonido() {
        console.log('Hace un sonido genérico');
    }
}

class Perro extends Animal {
    sonido() {
        console.log('Guau guau');
    }
}

class Gato extends Animal {
    sonido() {
        console.log('Miau');
    }
}

const perro = new Perro();
const gato = new Gato();

perro.sonido();
gato.sonido();
*/