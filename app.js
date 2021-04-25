const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__links li');

    burger.addEventListener('click', () => {

        //toggle nav
        nav.classList.toggle('nav__active');
        
        //Link's animations
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ``;
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
}

const headerLogoAnimation = () => {
    const headerLogo = document.querySelector('#header__logo');

    headerLogo.addEventListener('click', () => {

        //toggle logo
        headerLogo.id = "header__logo__active";
        style = window.getComputedStyle(headerLogo);
        flag = style.getPropertyValue('transform');

        //toggle logo after 0.5s to go to the initial position
        var timer;
        timer = setTimeout(function(){headerLogo.id = "header__logo";}, 850);
    });
}

navSlide();
headerLogoAnimation();