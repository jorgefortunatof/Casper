function onClickMenu() {
    const menu = document.querySelector('.nav-menu-content .nav')
    if (menu.style.display === "") {
        menu.style.display = 'block'
    } else {
        menu.style.display = ''
    }
}