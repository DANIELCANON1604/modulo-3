// Crea un array myArray de 50 elementos (números), que contendrá 50 numeros 
// números aleatorios entre 1 y 10. Ejemplo [ 3, 2 , 6, 8, 1, 3, 5, 2 .....] 
// (50 elementos)

const myArray = [];

for(let num = 1; num <= 50; num++){
    const aleatorios = Math.random() * 10;
    myArray.push(Math.round(aleatorios));
}

console.log("Numeros aleatorios del 1 al 10: ", myArray);