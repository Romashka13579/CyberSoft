var homeWebPages = document.querySelectorAll('.home-web-pages');

window.addEventListener('scroll', Scrolling);

Scrolling();

function Scrolling() {
    for (var i = 0; i < homeWebPages.length; i++) {
        var homeWebPageTrigger = (window.innerHeight - homeWebPages[i].getBoundingClientRect().height/2);
        var homeWebPageTop = homeWebPages[i].getBoundingClientRect().top;
        console.log(homeWebPageTrigger);
        console.log(homeWebPageTop);
        if (homeWebPageTop < homeWebPageTrigger) {
            homeWebPages[i].querySelector('.home-web-pages-txt').classList.add('show');
            homeWebPages[i].querySelector('.home-web-pages-description').classList.add('show');
            homeWebPages[i].querySelector('.home-web-pages-links').classList.add('show');
        }
    }
}