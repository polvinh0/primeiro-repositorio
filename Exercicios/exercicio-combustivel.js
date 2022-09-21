

const combustivel = prompt(`Bem vindo, com qual combustivel para abastecer?
A- Alcool
G- Gasolina`)

const gasolina = 2.70
const alcool = 1.90

if (combustivel == "G" || combustivel == "g") {
    const qtdCombustivel = parseInt(prompt("Insira a quantidade desejada em Litros de gasolina:"))
if (qtdCombustivel <= 25) {
    const precoFinal = (gasolina * qtdCombustivel) * 0.97
    alert(`deu ${precoFinal.toFixed(2)}`)
    console.log(precoFinal)
} else {const precoFinal = (gasolina * qtdCombustivel) * 0.95
    alert(`deu ${precoFinal}`)
    console.log(precoFinal.toFixed(2))

}
} else if (combustivel == "A"|| combustivel == "a") {
    const qtdCombustivel = parseInt(prompt("Insira a quantidade desejada em Litros de alcool:"))
if (qtdCombustivel <= 25) {
    const precoFinal = (alcool * qtdCombustivel) * 0.98
    alert(`deu ${precoFinal.toFixed(2)}`)
    console.log(precoFinal)
} else {const precoFinal = (alcool * qtdCombustivel) * 0.96
    alert(`deu ${precoFinal}`)
    console.log(precoFinal.toFixed(2))

}
}else {alert('Valor incorreto, tente novamente')}

