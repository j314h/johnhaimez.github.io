let btnMobile = document.querySelector('.btn_mobile')
let barre1Mobile = document.querySelector('.sp1btnm')
let barre2Mobile = document.querySelector('.sp2btnm')
let barre3Mobile = document.querySelector('.sp3btnm')

let header = document.querySelector('.header')
let main = document.querySelector('.main')
let nav = document.querySelector('.nav')


btnMobile.onclick = () => {

    header.classList.toggle('header_blur')
    main.classList.toggle('main_blur')
    nav.classList.toggle('nav_active')

    barre1Mobile.classList.toggle('sp1btnm_active')
    barre2Mobile.classList.toggle('sp2btnm_active')
    barre3Mobile.classList.toggle('sp3btnm_active')

    btnMobile.classList.toggle('btn_mobile_active')

}