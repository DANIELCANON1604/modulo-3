// Asumiendo que el IVA para los productos de la canasta familiar es de el 19%, crea una 
// funcion que reciba como parametro el precio de un articulo y retorne el valor de el IVA
// para ese articulo. Ejemplo si el articulo cuesta $1000 tu función debe retornar $190. 
// Recuerda que la formula que debes usar es la siguiente valorIVA = precioArticulo * 19 / 100

function newPrice (price){
    valorIva = price * 19 / 100
    console.log("El valor del IVA de tu producto es: $", valorIva);
};

newPrice(1000);