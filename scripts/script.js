//Het hamburger Menu // 
var menuutje = document.querySelector(".menu-ding");
menuutje.addEventListener("click", openMenu)
console.log('Menu')


function openMenu() {
    var navi = document.querySelector(".hamburger-menu")

    navi.classList.toggle('hamburger-menu-tonen');
}

function sluitMenu() {
    var navi2 = document.querySelector(".hamburger-menu")

    navi2.classList.remove('hamburger-menu-tonen')
}

window.addEventListener("click", function (event) {
    console.dir(event.target);
    console.log(event.currentTarget);
    if (document.body.classList.contains('hamburger-menu-tonen') && !event.target.classList.contains('menu-ding') && event.target.tagName != 'UL') {
        sluitMenu()
    }

})
