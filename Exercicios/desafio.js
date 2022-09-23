/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10%
*/

let precoProduto = parseFloat(prompt("Ola,por favor insira o valor do produto"))
while (isNaN(precoProduto)) {
       alert(`O preço digitado é invalido. Por favor, informe o preço apenas com numeros, sem caracteres `)
       precoProduto = parseFloat(prompt("Ola,por favor insira o valor do produto"))
}
let metodoDePagamento = Number(prompt(`Informe o metodo de pagamento
1- Dinheiro
2- Cheque
3- Cartão de credito`))
while (isNaN(metodoDePagamento) || (metodoDePagamento < 1) || (metodoDePagamento > 3)) {
       alert(`opção invalida`)
       metodoDePagamento = parseFloat(prompt(`Informe o metodo de pagamento
1- Dinheiro
2- Cheque
3- Cartão de credito`))
console.log(metodoDePagamento)
}

if (metodoDePagamento == 1 || metodoDePagamento == 2) { precoProduto = (precoProduto * 0.9) }
else if (metodoDePagamento == 3) {
       let parcelas = prompt('Informe a quantidade de parcelas')
       while ((isNaN(parcelas)) || (parcelas <1)) {
              alert(`Opção invalida, tente novamente`)
              parcelas = prompt('Informe a quantidade de parcelas')
              console.log(parcelas)
       }
       console.log(parcelas)
       if (parcelas == 1) { precoProduto = precoProduto * 0.85 }
       else if (parcelas == 2) { }
       else { precoProduto = precoProduto * 1.1 }
       // alert(`Opção Invalida`)

}

alert(`O valor total para pagamento é: R$${precoProduto.toFixed(2)} `)







