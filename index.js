
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

ScrollReveal({
    reset: true,
    loop: true,
    distance: '100px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.heading, .top', { origin: 'top'});
ScrollReveal().reveal('.bottom', { origin: 'bottom'});
ScrollReveal().reveal('.left', { origin: 'left'});
ScrollReveal().reveal('.right', { origin: 'right'});


/*================== typed js =================*/
const typed = new Typed('.multiple-text',{
    strings: ['An Exceptional Patient Experience', 'Medical services that you can trust.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

} );