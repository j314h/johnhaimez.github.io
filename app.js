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
//variable des section du dom
let sec1 = document.querySelector('.sec_1')
let sec2 = document.querySelector('.sec_2')
let sec3 = document.querySelector('.sec_3')
let sec4 = document.querySelector('.sec_4')
let sec5 = document.querySelector('.sec_5')
let sec6 = document.querySelector('.sec_6')

//dom section
//1
let cadreSec1 = document.querySelector('.cadre_sec_1')
//2
let cadreSec2 = document.querySelector('.cadre_sec_2')
let lireSection2 = document.querySelector('.lien_suite_2')
let lienLire2 = document.querySelector('.lien_lire_2')
//3
let cadreSec3 = document.querySelector('.cadre_sec_3')
let lireSection3 = document.querySelector('.lien_suite_3')
let lienLire3 = document.querySelector('.lien_lire_3')
//4
let cadreSec4 = document.querySelector('.cadre_sec_4')
let lireSection4 = document.querySelector('.lien_suite_4')
let lienLire4 = document.querySelector('.lien_lire_4')
//5
let cadreSec5 = document.querySelector('.cadre_sec_5')
let lireSection5 = document.querySelector('.lien_suite_5')
let lienLire5 = document.querySelector('.lien_lire_5')

//dom menu ordi
//cadre menu
let cardeMenuOrdi = document.querySelector('.cadre_menu_ordi')
//li
let li1 = document.querySelector('.l1')
let li2 = document.querySelector('.l2')
let li3 = document.querySelector('.l3')
let li4 = document.querySelector('.l4')
let li5 = document.querySelector('.l5')
let li6 = document.querySelector('.l6')
//a
let a1 = document.querySelector('.a1')
let a2 = document.querySelector('.a2')
let a3 = document.querySelector('.a3')
let a4 = document.querySelector('.a4')
let a5 = document.querySelector('.a5')
let a6 = document.querySelector('.a6')
//hover du menu
hoverMenu('mouseover', li1, a1)
hoverMenu('mouseout', li1, a1)
hoverMenu('mouseover', li2, a2)
hoverMenu('mouseout', li2, a2)
hoverMenu('mouseover', li3, a3)
hoverMenu('mouseout', li3, a3)
hoverMenu('mouseover', li4, a4)
hoverMenu('mouseout', li4, a4)
hoverMenu('mouseover', li5, a5)
hoverMenu('mouseout', li5, a5)
hoverMenu('mouseover', li6, a6)
hoverMenu('mouseout', li6, a6)
//fonction hover
function hoverMenu(a, b, c) {
    if (a == "mouseover") {
        b.addEventListener(a, () => {
            c.classList.add('hover_menu')
        })
    }
    if (a == "mouseout") {
        b.addEventListener(a, () => {
            c.classList.remove('hover_menu')
        })
    }

}

//scroll menu fixe ordi
window.addEventListener('scroll', () => {
    let s = window.scrollY

    if (s > 651) {
        cardeMenuOrdi.classList.add('cadre_menu_ordi_fixe')
    } else {
        cardeMenuOrdi.classList.remove('cadre_menu_ordi_fixe')
    }

})

//en mode ordi au chargement de la page
if(window.innerWidth > 900) {
    window.onload = () => {
        sec1.classList.add('affiche_section')
    }
}

//fonction pour clique sur bouton menu
li1.onclick = () => {
    sec1.classList.add('affiche_section')
    sec2.classList.remove('affiche_section')
    sec3.classList.remove('affiche_section')
    sec4.classList.remove('affiche_section')
    sec5.classList.remove('affiche_section')
    sec6.classList.remove('affiche_section')
}

li2.onclick = () => {
    sec1.classList.remove('affiche_section')
    sec2.classList.add('affiche_section')
    sec3.classList.remove('affiche_section')
    sec4.classList.remove('affiche_section')
    sec5.classList.remove('affiche_section')
    sec6.classList.remove('affiche_section')
}

li3.onclick = () => {
    sec1.classList.remove('affiche_section')
    sec2.classList.remove('affiche_section')
    sec3.classList.add('affiche_section')
    sec4.classList.remove('affiche_section')
    sec5.classList.remove('affiche_section')
    sec6.classList.remove('affiche_section')
}

li4.onclick = () => {
    sec1.classList.remove('affiche_section')
    sec2.classList.remove('affiche_section')
    sec3.classList.remove('affiche_section')
    sec4.classList.add('affiche_section')
    sec5.classList.remove('affiche_section')
    sec6.classList.remove('affiche_section')
}

li5.onclick = () => {
    sec1.classList.remove('affiche_section')
    sec2.classList.remove('affiche_section')
    sec3.classList.remove('affiche_section')
    sec4.classList.remove('affiche_section')
    sec5.classList.add('affiche_section')
    sec6.classList.remove('affiche_section')
}

li6.onclick = () => {
    sec1.classList.remove('affiche_section')
    sec2.classList.remove('affiche_section')
    sec3.classList.remove('affiche_section')
    sec4.classList.remove('affiche_section')
    sec5.classList.remove('affiche_section')
    sec6.classList.add('affiche_section')
}

//code pour mobile et tablette
if (window.innerWidth < 900) {
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

        if (cadreSec2.classList[2] == "cadre_sec_2_active") {

            lienLire2.textContent = "Fermer"

        } else {

            lienLire2.textContent = "Lire la suite"

        }

    }

    //click sur lire la suite section 3
    lireSection3.onclick = () => {

        cadreSec3.classList.toggle('cadre_sec_3_active')

        if (cadreSec3.classList[2] == "cadre_sec_3_active") {

            lienLire3.textContent = "Fermer"

        } else {

            lienLire3.textContent = "Lire la suite"

        }

    }

    //click sur lire la suite section 4
    lireSection4.onclick = () => {

        cadreSec4.classList.toggle('cadre_sec_4_active')

        if (cadreSec4.classList[2] == "cadre_sec_4_active") {

            lienLire4.textContent = "Fermer"

        } else {

            lienLire4.textContent = "Lire la suite"

        }

    }

    //click sur lire la suite section 5
    lireSection5.onclick = () => {

        cadreSec5.classList.toggle('cadre_sec_5_active')

        if (cadreSec5.classList[2] == "cadre_sec_5_active") {

            lienLire5.textContent = "Fermer"

        } else {

            lienLire5.textContent = "Lire la suite"

        }

    }

    //fonction au scroll
    window.addEventListener('scroll', () => {
        let r = window.scrollY //contient les coordonnee du scroll

        //scroll section 1
        if (r > 199 && r < 799) {
            if (cadreSec1.classList[1] == undefined) {
                cadreSec1.classList.add('cadre_sec_1_active')
            }
        } else {
            if (cadreSec1.classList[1] == 'cadre_sec_1_active') {
                cadreSec1.classList.remove('cadre_sec_1_active')
            }
        }

        //scroll section 2
        if (r > 799 && r < 1399) {
            if (cadreSec2.classList[1] == undefined) {
                cadreSec2.classList.add('cadre_sec_2_active_scroll')
                lireSection2.classList.add('lien_suite_2_active')
            }
        } else {
            if (cadreSec2.classList[1] == 'cadre_sec_2_active_scroll' && lienLire2.textContent == 'Lire la suite') {
                cadreSec2.classList.remove('cadre_sec_2_active_scroll')
                lireSection2.classList.remove('lien_suite_2_active')
            }
        }

        //scroll section 3
        if (r > 1399 && r < 1899 && lienLire2.textContent == 'Lire la suite') {
            if (cadreSec3.classList[1] == undefined) {
                cadreSec3.classList.add('cadre_sec_3_active_scroll')
                lireSection3.classList.add('lien_suite_3_active')
            }
        } else if (r > 2590 && lienLire2.textContent == 'Fermer') {
            if (cadreSec3.classList[1] == undefined) {
                cadreSec3.classList.add('cadre_sec_3_active_scroll')
                lireSection3.classList.add('lien_suite_3_active')
            }
            if (r > 3130 && cadreSec3.classList[1] == 'cadre_sec_3_active_scroll' && lienLire3.textContent == 'Lire la suite') {
                cadreSec3.classList.remove('cadre_sec_3_active_scroll')
                lireSection3.classList.remove('lien_suite_3_active')
            }
        } else {
            if (cadreSec3.classList[1] == 'cadre_sec_3_active_scroll' && lienLire3.textContent == 'Lire la suite') {
                cadreSec3.classList.remove('cadre_sec_3_active_scroll')
                lireSection3.classList.remove('lien_suite_3_active')

            }
        }

        //scroll section 4
        if (r > 1899 && r < 2330 && lienLire2.textContent == 'Lire la suite' && lienLire3.textContent == 'Lire la suite') {
            if (cadreSec4.classList[1] == undefined) {
                cadreSec4.classList.add('cadre_sec_4_active_scroll')
                lireSection4.classList.add('lien_suite_4_active')
            }
        } else if (r > 2590 && lienLire2.textContent == 'Lire la suite' && lienLire3.textContent == 'Fermer') {
            if (cadreSec4.classList[1] == undefined) {
                cadreSec4.classList.add('cadre_sec_4_active_scroll')
                lireSection4.classList.add('lien_suite_4_active')
            }
            if (r > 3080 && cadreSec4.classList[1] == 'cadre_sec_4_active_scroll' && lienLire4.textContent == 'Lire la suite') {
                cadreSec4.classList.remove('cadre_sec_4_active_scroll')
                lireSection4.classList.remove('lien_suite_4_active')
            }
        } else if (r > 3130 && lienLire2.textContent == 'Fermer' && lienLire3.textContent == 'Lire la suite') {
            if (cadreSec4.classList[1] == undefined) {
                cadreSec4.classList.add('cadre_sec_4_active_scroll')
                lireSection4.classList.add('lien_suite_4_active')
            }
            if (r > 3630 && cadreSec4.classList[1] == 'cadre_sec_4_active_scroll' && lienLire4.textContent == 'Lire la suite') {
                cadreSec4.classList.remove('cadre_sec_4_active_scroll')
                lireSection4.classList.remove('lien_suite_4_active')
            }
        } else if (r > 3830 && lienLire2.textContent == 'Fermer' && lienLire3.textContent == 'Fermer') {
            if (cadreSec4.classList[1] == undefined) {
                cadreSec4.classList.add('cadre_sec_4_active_scroll')
                lireSection4.classList.add('lien_suite_4_active')
            }
            if (r > 4330 && cadreSec4.classList[1] == 'cadre_sec_4_active_scroll' && lienLire4.textContent == 'Lire la suite') {
                cadreSec4.classList.remove('cadre_sec_4_active_scroll')
                lireSection4.classList.remove('lien_suite_4_active')
            }
        } else {
            if (cadreSec4.classList[1] == 'cadre_sec_4_active_scroll' && lienLire4.textContent == 'Lire la suite') {
                cadreSec4.classList.remove('cadre_sec_4_active_scroll')
                lireSection4.classList.remove('lien_suite_4_active')
            }
        }

        //scroll section 5
        if (r > 2330 && lienLire2.textContent == 'Lire la suite' && lienLire3.textContent == 'Lire la suite' &&
            lienLire4.textContent == 'Lire la suite') {
            if (cadreSec5.classList[1] == undefined) {
                cadreSec5.classList.add('cadre_sec_5_active_scroll')
                lireSection5.classList.add('lien_suite_5_active')
            }
        } else if (r > 3630 && lienLire2.textContent == 'Fermer' && lienLire3.textContent == 'Lire la suite' &&
            lienLire4.textContent == 'Lire la suite') {
            if (cadreSec5.classList[1] == undefined) {
                cadreSec5.classList.add('cadre_sec_5_active_scroll')
                lireSection5.classList.add('lien_suite_5_active')
            }
        } else if (r > 3130 && lienLire2.textContent == 'Lire la suite' && lienLire3.textContent == 'Fermer' &&
            lienLire4.textContent == 'Lire la suite') {
            if (cadreSec5.classList[1] == undefined) {
                cadreSec5.classList.add('cadre_sec_5_active_scroll')
                lireSection5.classList.add('lien_suite_5_active')
            }
        } else if (r > 5265 && lienLire2.textContent == 'Lire la suite' && lienLire3.textContent == 'Lire la suite' &&
            lienLire4.textContent == 'Fermer') {
            if (cadreSec5.classList[1] == undefined) {
                cadreSec5.classList.add('cadre_sec_5_active_scroll')
                lireSection5.classList.add('lien_suite_5_active')
            }
        } else if (r > 4340 && lienLire2.textContent == 'Fermer' && lienLire3.textContent == 'Fermer' &&
            lienLire4.textContent == 'Lire la suite') {
            if (cadreSec5.classList[1] == undefined) {
                cadreSec5.classList.add('cadre_sec_5_active_scroll')
                lireSection5.classList.add('lien_suite_5_active')
            }
        } else if (r > 5980 && lienLire2.textContent == 'Lire la suite' && lienLire3.textContent == 'Fermer' &&
            lienLire4.textContent == 'Fermer') {
            if (cadreSec5.classList[1] == undefined) {
                cadreSec5.classList.add('cadre_sec_5_active_scroll')
                lireSection5.classList.add('lien_suite_5_active')
            }
        } else if (r > 6540 && lienLire2.textContent == 'Fermer' && lienLire3.textContent == 'Lire la suite' &&
            lienLire4.textContent == 'Fermer') {
            if (cadreSec5.classList[1] == undefined) {
                cadreSec5.classList.add('cadre_sec_5_active_scroll')
                lireSection5.classList.add('lien_suite_5_active')
            }
        } else if (r > 7250 && lienLire2.textContent == 'Fermer' && lienLire3.textContent == 'Fermer' &&
            lienLire4.textContent == 'Fermer') {
            if (cadreSec5.classList[1] == undefined) {
                cadreSec5.classList.add('cadre_sec_5_active_scroll')
                lireSection5.classList.add('lien_suite_5_active')
            }
        } else {
            if (cadreSec5.classList[1] == 'cadre_sec_5_active_scroll' && lienLire5.textContent == 'Lire la suite') {
                cadreSec5.classList.remove('cadre_sec_5_active_scroll')
                lireSection5.classList.remove('lien_suite_5_active')
            }
        }

    })

}