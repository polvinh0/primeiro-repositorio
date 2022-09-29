alert("Código Funcionando!")
const nomeUsuario = prompt("Insira seu nome")

let num = Number(prompt("Ola, " + nomeUsuario + " Digite algum numero, por favor"))
// Console.log(typeof num) // tipo de  valor que a variavel armazena

//operadores de incremento
//const sucessor = num++
//const antecessor = num - 1

//alert("O Sucessor de " + num + " é " + sucessor)
//alert("O Antecessor de " + num + " é " + antecessor)
console.log(num++) // pos incremento
console.log(num)
console.log(++num) // pre-incremento

//operadores de decremento
console.log(num--)
console.log(num)
console.log(--num)