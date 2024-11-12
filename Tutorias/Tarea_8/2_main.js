// Escribir una función que reciba dos parametros, el precio de un articulo y el 
// porcentaje de descuento, tu funcion debe retornar el precio de el articulo con el 
// descuento aplicado, ejemplo si el articulo cuesta 1000 y el descuento es de 20 (porciento)
// , la funcion debe calcular que el descuento es de 200 (usndo la siguiente formula 
// valorDescuento = precioArticulo * porcentajeDescuento / 100) y retornar el valor inicial 
// de el producto menor el descuento, es decir, debe retornar 800.

function newPrice (price, descuento){
    valorDescuento = price * descuento / 100;
    nuevoValor = price - valorDescuento;
    console.log("El nuevo valor del producto es: $", nuevoValor);
};

newPrice(1000, 20)
