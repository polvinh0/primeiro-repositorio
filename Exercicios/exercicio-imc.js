

const peso = parseFloat(prompt(`Informe seu peso`))
const altura = parseFloat(prompt(`Informe sua altura`))

const imc = (peso/(altura ** 2))

if (imc <18.5) {
    alert( `Seu Imc é ${imc.toFixed(2)} Abaixo do peso`)
} else if (imc >= 18.5 && 25 ) {
    alert(`Seu Imc é ${imc.toFixed(2)} Peso Normal`)
} else if (imc >25 && 30) {
    alert(`Seu Imc é ${imc.toFixed(2)} Acima do peso`)
} else {
    alert(`Seu Imc é ${imc.toFixed(2)} Obeso`)
}

