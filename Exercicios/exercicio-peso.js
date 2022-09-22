


const altura = parseFloat(prompt(`Insira sua altura em Metros:`))
let sexo = prompt(`Insira seu sexo, digite:
M- para Masculino
F- para Feminino`)
sexo = sexo.toUpperCase()
console.log(sexo)
if (sexo == "M" || sexo == "m") {
    const pesoIdeal = (72.7 * altura)-58
    alert(`Seu peso ideal é: ${pesoIdeal.toFixed(2)}KG`)
}else if((sexo == "F" || sexo == "f")) {
    const pesoIdeal = (62.1 * altura)-44.7
    alert(`Seu peso ideal é: ${pesoIdeal.toFixed(2)}KG`)

}else {alert(`Opção invalida`)} 
