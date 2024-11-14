// Una variables es la manera en que podemos almacenar diferentes datos en JS
// Podemos utilizar esas variables para modificarlas, presentarlas y utilizarlas

// Cuando hablamos de declarar, nos referimos a:
// imc = peso / (altura * altura)
// var peso;

// Cuando hablamos de asignar un valor a una variable:
// var peso; // declare una variable
// peso = 59 // le asigne un valor a esa variable que anteriormente fue declarada


//
// const peso = Number(prompt('Digita tu peso')); // 60
// const alturaM = Number(prompt('Digita tu altura'));; // 1.56

// const imc = (peso / (alturaM * alturaM)).toFixed(2) 
// document.write(imc) // 11.30

// una variable yo tambien la puedo redeclarar y reasignar
// redeclarar
// const peso = 100;
// document.write(peso); // 100
// // reasginar
// alturaM = 1.65;

// if(imc > 10){
//     document.write('Tienes que hacer dieta');
// } else {
//     document.write('Tu IMC esta balanceado');
// }

// if(true){
//     var edad = 22
//     console.log(edad)
// }

// console.log(edad)


// const persona = {
//     nombre: 'Daniel',
//     age: 25
// }

// const personaJson = JSON.stringify(persona);

// console.log(persona);
// console.log(personaJson);

// const arreglo = [2, 3, 4, 5, 6].forEach(num => console.log(num))
// console.log(arreglo);


// if(true){
//     let x = 10
// }
// console.log(x);

// ------------------------------------------------------------------------------------
// const number = Math.round(Math.random() * (100 - 0) + 0)
// const parrafo = document.getElementById('parrafo')
// console.log(number);    

// const adivina = () => {
//     parrafo.classList.remove('felicitaciones')
//     const input = document.getElementById('input').value
//     if(number > input){
//         parrafo.innerHTML = 'El número es demasiado bajo. Intenta de nuevo'
//     } else if (number < input){
//         parrafo.innerHTML = 'El número es demasiado alto. Intenta de nuevo'
//     } else {
//         parrafo.innerHTML = `¡Felicidades! ¡Adivinaste el número ${number}!`
//         parrafo.classList.add('felicitaciones')
//     }
// }

// const input = document.getElementById('input');

// input.addEventListener('keydown', (event) => {
//     if(event.key === 'Enter'){
//         adivina()
//     }
// })

// ---------------------------------------------------------------------

const nombres = [];
const input = document.getElementById("input").value;
const parrafo = document.getElementById("parrafo");

nombres.push(input);
const numero = Math.round(Math.random() * (nombres.length - 1) + 1);
console.log(nombres[numero]);
// document.write(2);

