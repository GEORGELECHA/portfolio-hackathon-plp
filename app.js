
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu_icons');
const close = document.querySelector('.close-icon');


window.addEventListener('scroll', function () {
    const header = document.querySelector('.header_nav');
    if (window.scrollY > 100) { // Change 100 to whatever scroll position you want
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('.header_nav');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


const typingElement = document.querySelector('.typing-text');

typingElement.addEventListener('animationiteration', () => {
    // Reset the width to trigger the animation again
    typingElement.style.width = '0';
    void typingElement.offsetWidth; // Trigger reflow
    typingElement.style.width = '';
});


var tablinks = document.getElementsByClassName("tab_links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")

}




//sIDE BAR


// sidebar elements //
menu.addEventListener("click", function () {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

close.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});