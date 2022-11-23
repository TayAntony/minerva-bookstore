const produto = document.getElementById('produto')
const preco = document.getElementById('preco')
carrinho = []
listaProdutos = []
listaID = [
    {id:0, nome: "Percy Jackson: O Ladrão de Raios", img:"carrossel/pjo1.png", preco:25.00},
    {id:1, nome: "Percy Jackson: O Mar de Monstros", img:"carrossel/pjo2.png", preco:25.00},
    {id:2, nome: "Percy Jackson: A Maldição do Titã", img:"carrossel/pjo3.png", preco:25.00},
    {id:3, nome: "Percy Jackson: A Batalha no Labirinto", img:"carrossel/pjo3.png", preco:25.00},
    {id:4, nome: "Percy Jackson: O Último Olimpiano", img:"carrossel/pjo3.png", preco:25.00},
    {id:5, nome: "Box: Trono de Vidro", img:"carrossel/tog.png", preco:175.00},
    {id:6, nome: "Box: A Corte de Espinhos e Rosas", img:"carrossel/acotar.png", preco:155.00},
    {id:7, nome: "Box: Estilhaça-me", img:"carrossel/estilhaca-me.png", preco:125.00},
]
function adicionar(id){
    var produto = listaID.find(x => x.id == id)
    produtoNome = produto.nome
    produtoImage = produto.img
    produtoPreco = produto.preco
    addCarrinho(produtoNome, produtoPreco, produtoImage)
    alert('Produto adicionado com sucesso!')
}


function addCarrinho(produto, preco, imagem){
    var novoProduto = {nome: produto, valor: preco, img: imagem}
    listaProdutos.push(novoProduto)
    console.log(listaProdutos)
    exibirProdutos()
    salvarCarrinho()
}

function exibirProdutos(){
    var contador = 0
    var codHtml = ''
    carrinhoVazio()
    listaProdutos.forEach((products) => {
        codHtml += `<div><img src="${products.img}" alt="" style="width: 150px; padding: 1rem">
        <h2>${products.nome}</p>
        <div style="color:green"><b>R$${products.valor},00</b>
        <button onclick="removerProduto(${contador})" class="botao-remover"><b>X</b></button></div></div><hr>`
        contador += 1
    })
    if (document.getElementById('produtos') != null){
    document.getElementById('produtos').innerHTML = codHtml
    }
}
function carrinhoVazio(){
    if ( document.getElementById('vazio') != null){
    if ((listaProdutos.length) != 0){
        document.getElementById('vazio').innerHTML = ""
    }
    }
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

function total(){
    alert(`TOTAL DE R$ ${listaID[2]}`)
}

function comprar(){
    listaProdutos = []
    salvarCarrinho()
    if (document.getElementById('produtos') != null){
        document.getElementById('produtos').innerHTML = null
        }
    alert("COMPRA REALIZADA")
}
obterCarrinho()
