/*====================================toggle iccon navbar =========================================*/
//https://boxicons.com/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*=================================scroll sections active link====================================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================================== sticky navbar  ==============================================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*====================================remove iccon navbar when click on link===========================================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================================== scroll reval  ================================================*/
//https://scrollrevealjs.org/guide/customization.html
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================================== typed js  ================================================*/
//https://github.com/mattboldt/typed.js
const typed = new Typed('.multipule-text',{
    strings: ['Software Developer', 'Web Application Developer', 'Student Software Engineering'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});
