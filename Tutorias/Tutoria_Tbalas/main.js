var number2 = prompt("Digite hasat que numero quiere ver su tabla")

for ( var number = 1; number <= number2; number++ ){
    document.write("<br><br>Tabla del ", number, "<br>")
    for (var i = 1; i <= 10; i++){
        tableResult = i * number
        document.write("<br> el resultado de ", number, "X", i,  " es: ", tableResult)
    }
}
