//delimitação de strings

const aspasSimples = 'ola mundo'
console.log(aspasSimples)

// caracteres de escape

const aspasDuplas = "ola eu sou o \nJavascript. Eu sou melhor que o \nPython"
console.log(aspasDuplas)

const textoComCrase =`Ola eu sou o 
Javascript eu sou melhor
que o Phyton`

// métodos das strings

const texto = 'O Javascript foi criado ALGUNS anos apos o Python. No entanto, o Javascript é bem mais bacana.'
console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat('mas o C é a linguagem mãe'))
console.log(texto.substring(1, 12))
console.log(texto.replace('Javascript', 'Rust')) //substitui a primeira e para
console.log(texto.replaceAll('Javascript', 'Kotlin'))
console.log(texto.replace(/Javascript/g, 'PHP'))
console.log(texto.replace(/Javascript/gi, 'PHP'))

const html = '<!DOCTYPE html>\n<html></html>'
console.log(html.startsWith('<!DOCTYPE html>'))
const mensagem = '                                       Olá Mundo                                                '
console.log(mensagem)
console.log(mensagem.trim())

let senha = 'sonic'

console.log(senha.length)
console.log(senha.length >= 8) 
