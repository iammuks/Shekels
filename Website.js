let scrolls = document.querySelectorAll('scroll');

windos.onscroll = () => {
    scrolls.forEach(scr =>{
        let top = window.scrollY;
        let offset = scr.offsetTop - 150;
        let height = scr.offsetHeight;

        if (top >= offset && top < offset + height) {
            scr.classList.add('animate');
        }

        else {
            scr.classList.remove('animate');
        }
    })
}