//dom btn mobile
let btnMobile = document.querySelector('.btn_mobile')
let barre1Mobile = document.querySelector('.sp1btnm')
let barre2Mobile = document.querySelector('.sp2btnm')
let barre3Mobile = document.querySelector('.sp3btnm')

//dom nav main header
let header = document.querySelector('.header')
let main = document.querySelector('.main')
let nav = document.querySelector('.nav')

//dom section
let lireSection2 = document.querySelector('.lien_suite_2')
let cadreSec2 = document.querySelector('.cadre_sec_2')
let lienLire2 = document.querySelector('.lien_lire_2')

let lireSection3 = document.querySelector('.lien_suite_3')
let cadreSec3 = document.querySelector('.cadre_sec_3')
let lienLire3 = document.querySelector('.lien_lire_3')

let lireSection4 = document.querySelector('.lien_suite_4')
let cadreSec4 = document.querySelector('.cadre_sec_4')
let lienLire4 = document.querySelector('.lien_lire_4')

let lireSection5 = document.querySelector('.lien_suite_5')
let cadreSec5 = document.querySelector('.cadre_sec_5')
let lienLire5 = document.querySelector('.lien_lire_5')


// click btn menu mobile
btnMobile.onclick = () => {

    header.classList.toggle('header_cacher')
    main.classList.toggle('main_cacher')
    nav.classList.toggle('nav_active')

    barre1Mobile.classList.toggle('sp1btnm_active')
    barre2Mobile.classList.toggle('sp2btnm_active')
    barre3Mobile.classList.toggle('sp3btnm_active')

    btnMobile.classList.toggle('btn_mobile_active')

}

//click sur menu mobile
nav.onclick = () => {

    //si menu deja activer
    if (nav.classList[1] == "nav_active") {
        header.classList.toggle('header_cacher')
        main.classList.toggle('main_cacher')
        nav.classList.toggle('nav_active')

        barre1Mobile.classList.toggle('sp1btnm_active')
        barre2Mobile.classList.toggle('sp2btnm_active')
        barre3Mobile.classList.toggle('sp3btnm_active')

        btnMobile.classList.toggle('btn_mobile_active')
    }

}

//click sur lire la suite section 2
lireSection2.onclick = () => {

    cadreSec2.classList.toggle('cadre_sec_2_active')

    if (cadreSec2.classList[1] == "cadre_sec_2_active") {

        lienLire2.textContent = "Fermer"

    }else {

        lienLire2.textContent = "Lire la suite"

    }

}

//click sur lire la suite section 3
lireSection3.onclick = () => {

    cadreSec3.classList.toggle('cadre_sec_3_active')

    if (cadreSec3.classList[1] == "cadre_sec_3_active") {

        lienLire3.textContent = "Fermer"

    }else {

        lienLire3.textContent = "Lire la suite"

    }

}

//click sur lire la suite section 4
lireSection4.onclick = () => {

    cadreSec4.classList.toggle('cadre_sec_4_active')

    if (cadreSec4.classList[1] == "cadre_sec_4_active") {

        lienLire4.textContent = "Fermer"

    }else {

        lienLire4.textContent = "Lire la suite"

    }

}

//click sur lire la suite section 5
lireSection5.onclick = () => {

    cadreSec5.classList.toggle('cadre_sec_5_active')

    if (cadreSec5.classList[1] == "cadre_sec_5_active") {

        lienLire5.textContent = "Fermer"

    }else {

        lienLire5.textContent = "Lire la suite"

    }

}


