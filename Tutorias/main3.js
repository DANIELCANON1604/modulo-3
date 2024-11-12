// class Autos {
//     constructor (marca, modelo, disponible) {
//         this.marca = marca,
//         this.modelo = modelo,
//         this.disponible = disponible
//     }
// }

// const auto1 = new Autos("chevrolet", 2014, true)
// console.log(auto1)
// const auto2 = new Autos("ferrari", 2018, false)
// console.log(auto2)

// var nombre = prompt("Nombre");
// alert("Hola" + nombre)

// if(true){
//     let suma = 12 + 3;
//     console.log(suma)
// }

// console.log(suma);


class Autos {
    constructor(name, marca, modelo){
        this.nombre = name;
        this.marc = marca;
        this.age = modelo;
    }
}

const auto1 = new Autos("q5", "audi", 2023)
const auto2 = new Autos("k3", "chevrolet", 2022)
const auto3 = new Autos("3", "mazda", 2012)

// const array = [auto1, auto2, auto3]

console.log(auto1)
console.log(auto2)


// var numero = 5
// var numero2 = 2

// console.log(`El valor de la division es ${numero/numero2}`);



// const saludar = () => {
//     console.log("saludo")
// }

// saludar()

// saludar = () => {
//     console.log("Cambio")
// };

// saludar()

// var numero = 100
// var meses = 3;
// let resultado = 0;

// for(let i=1; i <= 3; i++){
//     let resultado = resultado + numero
//     console.log(`Mes ${i}: $ ${resultado}`);
// }

// console.log(`FIN, total a ahorrar $ ${resultado}`)
