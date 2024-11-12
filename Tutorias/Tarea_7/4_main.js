// Dado un array 5 elementos de strings eg. const 
// myArray = ["hola", "mundo", "como", "estas", "hoy"]. 
// Copia los elementos del arreglo en un nuevo arreglo pero en orden inverso, 
// y muéstralo por la pantalla. Tip puedes hacer un for que inicie en myArray.length 
// y que en cada iteracion en ves de sumar reste una posicion así podras leer tu 
// arreglo en sentido contrario

const myArray = ["hola", "mundo", "como", "estas", "hoy"]
const newArray = []

for (let num = myArray.length - 1; num >= 0; num--){
    newArray.push(myArray[num]);
}

console.log("Arreglo Invertido: ", newArray);