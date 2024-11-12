// Escribir una función que reciba un array de numeros y retorne la suma de esos numeros. 
// Ejemplo: si mi funcion recibe el array [1, 5, 2] la salida debe ser 8

function sumArray(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        suma = suma + array[i];
    }
    return suma;
}

const resultado = sumArray([1, 5, 2]);
console.log("El resultado de la suma del Arreglo es: ", resultado);