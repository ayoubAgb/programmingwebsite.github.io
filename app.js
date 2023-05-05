let Header = document.querySelector("header");
let menuMobile = document.querySelector('.mobile-menu')
let btnMenu = document.querySelector('.fa-bars')
let btnClose = document.querySelector('.fa-circle-xmark')



btnMenu.onclick = () => {
    menuMobile.style.left = '0';
    btnClose.style.display = 'block'
    btnMenu.style.display = 'none'
}
btnClose.onclick = () => {
    menuMobile.style.left = '-70%';
    btnMenu.style.display = 'block'
    btnClose.style.display = 'none'
}

window.onscroll = function(){
    if (window.pageYOffset > 50) {
        Header.classList.add('headerbg')
    }else {
        Header.classList.remove('headerbg')
    }
}