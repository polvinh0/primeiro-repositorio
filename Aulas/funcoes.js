// function cumprimetar(mensagem){
//     document.write(mensagem.toUpperCase())
// }

// cumprimetar('Oiii')

// function maiorValor(a, b){
//     if (a>b){
//         return a
//     }else {
//         return b
//     }
// }

// let resultado = soma(5, 9)
// console.log(`O valor da variavel resultado é ${resultado}`)

const num1 = parseInt(prompt('Informe o primeiro numero'))
const num2 = parseInt(prompt('Informe o segundo numero'))
const num3 = parseInt(prompt('Informe o segundo numero'))
alert(`as raizes são ${eqSegundoGrau(num1, num2, num3)}`)



function eqSegundoGrau(a, b, c){

    const delta = b ** 2 -(4 * a * c)
    const X1 = -(b+Math.sqrt(delta))/(2*a)
    const X2 = -(b-Math.sqrt(delta))/(2*a)
     
    return [delta, X1, X2]
}