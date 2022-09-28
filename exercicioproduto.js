let produto = {
    nome: [],
    marca:[],
    link:[],
    precoUnitario:[],
    qtdProdutos:[],
}
let aProduto=[]
for (let i = 0; i < 3; i++){
    aProduto[i]= {
    nome: prompt('Insira o nome do produto'),
    marca: prompt('Insira a marca do produto'),
    link: prompt('Insira o link do produto'),
    precoUnitario: prompt('Insira o preço do produto'),
    qtdProdutos: prompt('Insira a quantidade do produto'),   
    }
    console.log(aProduto)
}
    document.write(aProduto)