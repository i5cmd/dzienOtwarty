"use strict";
/// <reference types="jquery" />
// const menuButton: HTMLButtonElement = document.getElementById("menu-button") as HTMLButtonElement;
// const mobileNav: HTMLDivElement = document.getElementById("mobile-nav") as HTMLDivElement;
// const mobileLinks: NodeList = document.querySelectorAll(".mobile-link");
let powered = false;
class NavManagement {
    open() {
        $('#mobile-nav').css("display", "flex");
        setTimeout(() => {
            $('#mobile-nav').css("transform", "translateX(0)");
        }, 10);
    }
    close() {
        $('#mobile-nav').css("transform", "translateX(100%)");
        setTimeout(() => {
            $('#mobile-nav').css("display", "none");
        }, 500);
    }
}
const navManagement = new NavManagement();
$('#menu-button').click(() => {
    powered = !powered;
    if (powered) {
        navManagement.open();
    }
    else {
        $('#menu-button').css("display", "flex");
        navManagement.close();
    }
});
/* mobileLinks.forEach(element => {
    element.addEventListener('click', () => navManagement.close());
}); */
$(".mobile-link").click(() => navManagement.close());
