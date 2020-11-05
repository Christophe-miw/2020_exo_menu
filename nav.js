var navButton = document.querySelector('.hamb');
var nav = document.querySelector('.barrNavOuv');


navButton.addEventListener('click',toggleHamb);

function toggleHamb() {
    nav.classList.toggle('barrnav');
}

var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach(
    function(menuLink) {
        menuLink.addEventListener("click", toggleHamb)
    }
)