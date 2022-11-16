const produto = document.getElementById('produto')
const preco = document.getElementById('preco')
listaProdutos = []

function adicionar(){
    if(produto.value == ''){
        alert('Digite um produto')
        return
    } else if (preco.value == ''){
        alert('Digite o preço do produto')
        return
    }
    addCarrinho(produto.value, preco.value)
    limpar()
}

function limpar(){
    produto.value = ''
    preco.value = ''
    produto.focus()
}

function addCarrinho(produto, preco){
    var novoProduto = {nome: produto, valor: preco}
    listaProdutos.push(novoProduto)
    console.log(listaProdutos)
    exibirProdutos()
    salvarCarrinho()
}

function exibirProdutos(){
    var contador = 0
    var codHtml = ''
    listaProdutos.forEach((products) => {
        codHtml += `<div><h1>${products.nome}</h1><div><b>${products.valor}</b><button onclick="removerProduto(${contador})" class="botao-hover">X</button></div></div><hr>`
        contador += 1
    })

    document.getElementById('produtos').innerHTML = codHtml
}

function salvarCarrinho(){
    localStorage.setItem('loja', JSON.stringify(listaProdutos))
}

function obterCarrinho(){
    if(localStorage.getItem('loja') != null){
        listaProdutos = JSON.parse(localStorage.getItem('loja'))
        exibirProdutos()
    }
    
}

function removerProduto(posicao){
    listaProdutos.splice(posicao, 1)
    salvarCarrinho()
    obterCarrinho()
}

preco.addEventListener("keyup", function(event){
    if (event.key === "Enter"){
        adicionar()
    }
})

function verProdutos(){
    
}
obterCarrinho()