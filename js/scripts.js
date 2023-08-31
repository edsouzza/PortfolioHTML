// botão das barrinhas
let btnMenuMobile = document.getElementById('btnAbreMenu')

// menu mobile
let MenuMobile    = document.getElementById('menu-mobile')

// overlay overlayMenu
let overlay       = document.getElementById('overlayMenu')

btnMenuMobile.addEventListener('click', ()=>{
    MenuMobile.classList.add('openMenu')
})

MenuMobile.addEventListener('click', ()=>{
    MenuMobile.classList.remove('openMenu')
})

overlay.addEventListener('click', ()=>{
    MenuMobile.classList.remove('openMenu')
})
