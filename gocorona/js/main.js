(function(){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    } 
 }());

 // BURGER MENU

 (function(){
    const burger = document.querySelector('.burger_menu');
    const menuList = document.querySelector('.header_list');
    const menuLink = document.querySelectorAll('.header_link');
    const burgerLine = document.querySelector('.burger_menu-line');

    burger.addEventListener('click', () => {
        menuList.classList.add('header_list-vis');
        if(burgerLine.classList.contains('close')) {
            menuList.classList.remove('header_list-vis');
            burgerLine.classList.remove('close');
        } else {
            burgerLine.classList.add('close');
        }
    })

    menuLink.forEach(element => {
        element.addEventListener('click', () => {
            menuList.classList.remove('header_list-vis');
            burgerLine.classList.remove('close');
        })
    });
 }());

 // PLAY VIDEO

 (function(){
    const videoPlay = document.querySelector('.video_ico');
    const video = document.querySelector('.video');
    videoPlay.addEventListener('click', () => {
        if(video.paused) {
            video.play();
            videoPlay.classList.add('video_ico-hidden');
        } else {
            video.pause();
            videoPlay.classList.remove('video_ico-hidden');
        }
    })
 }())