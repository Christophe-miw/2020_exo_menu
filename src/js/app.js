let button_part = document.querySelector('.menu_button_part')
let menu = document.querySelector('.menu_container')

document.querySelector('.menu_button').addEventListener('click', () => {
    button_part.classList.toggle('cross')
    menu.classList.toggle('open')
})