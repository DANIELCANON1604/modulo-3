// Usando el array que creaste en el punto 1, vamos a crear un nuevo arreglo 
// llamado newArray que contenga solo los numeros que son menores a 4. Ejemplo 
// si en punto 1 generaste un arreglo myArray como este [7,2,5,2,9,3,1,4,8], tu 
// nuevo arreglo newArray debera ser [2,2,3,1]. Tip Utiliza un for para recorrer 
// el primer myArray arreglo e ir llenando el segundo (newArray.push) pero solo 
// si el valor es menor a 4.

const myArray = [];

for(let num = 1; num <= 50; num++){
    const aleatorios = Math.random() * 10;
    myArray.push(Math.round(aleatorios));
}

console.log("Numeros aleatorios del 1 al 10: ", myArray);

// ------------------ Menores a 4 -------------------------
const newArray = [];

for (let count = 1; count <= 50; count++){
    const num = myArray[count];
    if(num < 4){
        newArray.push(num)
    }
}
console.log("Numeros menores a 4: ", newArray);