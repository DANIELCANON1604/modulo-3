const num = Math.round(Math.random() * (100 - 1) + 1)
console.log(num)

const input = document.getElementById("input")
const frase = document.getElementById("parrafo")

const adivina = () => {
    const inputValue = Number(input.value);
    if(inputValue === num){
        frase.innerHTML = "Adivinaste"
    } else if(inputValue > num){
        frase.innerHTML = "El numero esta más abajo. Intenta de nuevo"
    } else if(inputValue < num){
        frase.innerHTML = "El numero esta más arriba. Intenta de nuevo"
    }
}

adivina();