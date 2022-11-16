const botao = document.getElementById('burger')
const menuMobile = document.getElementById('menu-mobile')

botao.addEventListener('click', abrir)

function abrir(){
    //botao.className == 'active'     alternativa para contains
    menuMobile.classList.toggle('active') 
    botao.classList.toggle('active') //uma maneira de entender que se tiver active ele desativa, e se nao tiver ele ativa


    //alternativa para toggle
    // if(botao.classList.contains('active')){
    //     botao.classList.remove('active')

    // }
    // else{
    //     botao.classList.add('active')
    // }
    
    
}