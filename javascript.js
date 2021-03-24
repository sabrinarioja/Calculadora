var primeiroValor = parseInt(prompt('digite o primeiro valor:'))
var segundoValor = parseInt(prompt('digite o segundo valor:'))
var resultado = primeiroValor / segundoValor

var operação = prompt("digite 1 para fazer uma divisão,2 para multiplicação,3 para soma e 4 para subtração: ")

if (operação == 1) {
    var resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + "=" + resultado + "</h2>")

} else if (operação == 2) {
    var resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " * " + segundoValor + "=" + resultado + "</h2>")

} else if (operação == 3) {
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + "=" + resultado + "</h2>")
} else if (operação == 4) {
    var resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + "=" + resultado + "</h2>")
} else { document.write("<h2>Opção inválida :)</h2>") }

//escrevendo na tela = document.write()
//concatenação (juntar palavras com variáveis) - ("palavra" + variável)
//== - comparação é diferente do = que usamos para fazer atribuição
//if= se (do português)
//else= senão (se não)
//else if= senão se