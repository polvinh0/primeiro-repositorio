let contador = 0
function mostrarAlerta(){
 /*o objeto docment é um objeto que faz uma representação do HTML do seu site dentro do Javascript */
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
    contador ++;
    document.getElementById('numero').innerHTML=contador;
}

function fecharAlerta(){

    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}


const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')

btnMostrar.addEventListener('click', mostrarAlerta)
btnFechar.addEventListener('click', fecharAlerta)