// const cantidadAInvertir = Number(prompt("Digite cantidad a invertir"));
// const meses = Number(prompt("Digite los meses durante los que quiere invertir"));
// var capitalTotal = 0;

// for (var mes = 1; mes <= meses; mes++){
//     const capital = mes * cantidadAInvertir;
//     document.write("Mes ", mes, ": $", capital, "<br>")
//     capitalTotal = capitalTotal + capital;
// }

// document.write(capitalTotal);


// const sayHello = (name) => {
//     console.log("Hola mundo", name);
// }

// sayHello("Daniel")

// const array = ["Daniel", "Heidy", "Natalia", "Daniel", "Heidy", "Natalia", "Daniel", "Heidy", "Natalia"];

// //console.log(Math.round(Math.random()*100));

// //const newArray = Math.random(array);
// const newArray = array[Math.random()];
// console.log(newArray);


function numero(max){
    const number = Math.floor(Math.random() * max);
    return number
}
const number2 = numero(10)
console.log(number2);
//console.log(numero(100));

const array = ["Daniel", "Heidy", "Natalia", "Juan", "Esteban", "Julian", "David", "Angie", "Lorena", "Valentina", "Barragan"];

//console.log(Math.round(Math.random()*(100-50)+50))
//for(let num = 1; num <= 10; num++){
    const recorrer = array[Math.floor(Math.random()*array.length)]
   // console.log(recorrer);
// }


let myArray = [1, 2, 3, 4, 5]
let invertido = []

for(let i = myArray.length - 1; i >= 0; i--){
    invertido.push(myArray[i])
}

//console.log(invertido);


// const preguntas = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
// ]

//console.log(preguntas[1][2])

var preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Madrid", "Londres", "París", "Roma"],
        respuestaCorrecta: 2 // Índice de la respuesta correcta en el array de opciones
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        opciones: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        respuestaCorrecta: 0 // Índice de la respuesta correcta en el array de opciones
    },
    {
        pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
        opciones: ["Miguel de Cervantes", "Gabriel García Márquez", "William Shakespeare", "Leo Tolstoy"],
        respuestaCorrecta: 0 // Índice de la respuesta correcta en el array de opciones
    },
    // Agrega más preguntas aquí...
];

//console.log(preguntas[0].opciones[2])


setTimeout (
    function () {
        document.write("Hola mundo")
    }, 5000
)


