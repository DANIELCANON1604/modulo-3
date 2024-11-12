const numeros = [6, 1, 5, 2, 0];
let numeroMayor = 0;

for(let i = 0; i <= numeros.length; i++){
    if(numeros[i] > numeroMayor){
        numeroMayor = numeros[i];
    }
}

console.log(`Tu numero mayor es: ${numeroMayor}`);

let palabra = 'Daniel kambcode'

console.log(palabra.length);
