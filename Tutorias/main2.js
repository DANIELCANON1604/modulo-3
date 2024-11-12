// Funcion que devuelva el factorial de un numero
// EJ. 5 = 5 * 4 * 3 * 2 * 1

// function factorial(numero){
//     let number = 1
//     for(let num = numero; num >= 1; num --){
//         number = number * num
//     }
//     return number;
// }

// console.log(factorial(10));

// // Cree una funcion que al pasarle una frase
// // Diga cuantas palabras tiene

// const frase = (frase) => {
//    return newFrase = frase.split(" ")
// }

// console.log(frase("Hola como estas el dia de").length)
// console.log(newFrase)


// const clientes = Number(prompt("Digita un numero"));
// const membresia = false
// const descuento = clientes - (clientes * 0.1)

// if((membresia && clientes > 50000) || clientes > 200000){
//     document.write("Tiene descuento de: ", descuento)
// } else {
//     document.write("No obtines descuento")
// }

// let diaSemana = prompt("Digita un dia").toLowerCase();
// const hora = Number(prompt("Digita una hora"));

// if((diaSemana==="lunes" || diaSemana==="martes" || diaSemana==="miercoles"
//     || diaSemana==="jueves" || diaSemana==="viernes") && (hora >= 9 && hora <= 17)
// ){
//     document.write("Esta abierta la tienda")
// } else {
//     document.write("Esta cerrada la tienda")
// }


// function contar (array){
//     let suma = 0;
//     for(let i = 0; i <= 2; i++){
//         suma = suma + array[i]
//     }
//     return suma
// }

// console.log("La suma del arreglo es: ",contar([1, 5, 2]))


// const contar = (array) => {
//     let suma = 0;
//     for(let i = 0; i < array.length; i++){
//         suma += array[i]
//     }
//     return [suma, suma / array.length]
// }


// let sumatoria= contar([2, 8, 7])
// console.log(`La suma del arreglo es ${sumatoria[0]} y su promedio es ${sumatoria[1]}`)


// --------------- Funcion Constructora
function Persona(nombre, edad){
    this.nombre = nombre
    this.edad = edad
}

Persona.prototype.saludar = function(){
    console.log(`Hola ${this.nombre}, tu edad es: ${this.edad}`)
}

const persona1 = new Persona("Daniel", 22);
const persona2 = new Persona("Julian", 25);

console.log(persona1)
console.log(persona2)


// -------------- Con Class
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludar() {
        console.log(`Hola ${this.nombre}, tu edad es: ${this.edad}`)
    }
}


//-----------EJERCICIO CONSTRUCTOR----------------
// Claro, aquí tienes un ejercicio sencillo para practicar el uso de constructores en JavaScript.
// Este ejercicio consiste en crear una clase Animal y luego instanciar diferentes animales con 
//propiedades específicas.
// Propiedades:
// especie: la especie del animal (por ejemplo, "perro", "gato").
// nombre: el nombre del animal.
// edad: la edad del animal.

// Métodos:
// describir(): un método que imprime una descripción del animal en la consola en el siguiente formato: "Este es un [especie] llamado [nombre] y tiene [edad] años."
// Después de definir la clase, crea tres instancias diferentes de Animal y llama al método describir para cada una.

class Animal {
    constructor(especie, nombre, edad){
        this.especie = especie;
        this.nombre = nombre
        this.edad = edad
    }
    describir(){
        console.log(`Este es un ${this.especie} llamado ${this.nombre} y tiene ${this.edad} años.`)
    }
    
}

const animal1 = new Animal("Elefante", "Lampi", 5)
const animal2 = new Animal("Perro", "Dante", 3)
const animal3 = new Animal("Gato", "Luna", 10)

// animal1.describir();
// animal2.describir();
// animal3.describir();

console.log(animal1)
console.log(animal2)
console.log(animal3)

animal1.describir();


