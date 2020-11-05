document.getElementById('Menu').addEventListener('click', function () {
    //ouverture
    if (document.getElementById("UlMenu").classList.contains('displayNone')) {
        // affiche fond gris
        document.getElementById("navGrey").classList.add('navGrey');
        // affiche menu
        document.getElementById("UlMenu").classList.add('displayBlock');
        document.getElementById("UlMenu").classList.remove('displayNone');
    }
    // fermeture
    else {
        // fond gris tel
        document.getElementById("navGrey").classList.remove('navGrey');
        // enleve le menu
        document.getElementById("UlMenu").classList.remove('displayBlock');
        document.getElementById("UlMenu").classList.add('displayNone');
    }
});