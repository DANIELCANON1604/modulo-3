// Escribir un programa usando HTML, Javascript y la función promt que pregunte a el usuario una 
// lista de compras y las vaya almacenando cada una de estos elementos en un array. Si en algun 
// momento la tarea que el usuario ingreso ya fue ingresada anteriormente (es decir ya pertence 
// a el array) elemento NO debe añadirse a el array y en su defecto mostrar un mensaje que 
// diga "Error: Este elementos ya esta en la lista de compras".

// let shoppingList = [];

// for(let i = 1; i <= 5; i++){
//     const list = prompt("Digita tu producto");
//     for(let j = 0; j <= shoppingList.length; j++){
//         if(list = shoppingList[j]){
//             alert("Error: Este elementos ya esta en la lista de compras")
//         } else {
//             shoppingList.push(list)
//         }
//     }
// }

// document.write(shoppingList);

let shoppingList = [];

for(let i = 1; i <= 5; i++){
    let list = prompt("Digita tu producto");
    let existe = false
    for(let j = 0; j <= shoppingList.length; j++){
        if(list === shoppingList[j]){
           existe = true;
           alert("Error: Este elemento ya está en la lista de compras");
           break
        }
        
    }
        if(!existe){
            shoppingList.push(list)
    }
    
}

document.write(shoppingList);