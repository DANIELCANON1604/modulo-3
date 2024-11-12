// Escribir una función que reciba un array de numeros y retorne el promedio de esos numeros. 
// Recuerda que para calcular el promedio debes sumar todos los numeros y dividir el resultado 
// entre el total de numeros


function promArray(array){
    let suma = 0
    for (let i = 0; i < array.length; i++){
        suma += array[i];
    };
    const promedio = suma / array.length;
    return promedio;
}

const result = promArray([2, 4, 6, 8]);
console.log("El promedio de los numeros es: ", result);

// ------------------------------------------------------------
// Hacer la iteracion diferente

// function promArray(array){
//     let suma = 0
//     for (let num of array){
//         suma += num;
//     };
//     const promedio = suma / array.length;
//     return promedio;
// }

// const result = promArray([2, 4, 6, 8]);
// console.log("El promedio de los numeros es: ", result);