"use strict";
const menuButton = document.getElementById("menu-button");
const mobileNav = document.getElementById("mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-link");
let powered = false;
class NavManagement {
    open() {
        mobileNav.style.display = "flex";
        setTimeout(() => {
            mobileNav.style.transform = "translateX(0)";
        }, 10);
    }
    close() {
        mobileNav.style.transform = "translateX(100%)";
        setTimeout(() => {
            mobileNav.style.display = "none";
        }, 500);
    }
}
const navManagement = new NavManagement();
menuButton.addEventListener('click', () => {
    powered = !powered;
    if (powered) {
        navManagement.open();
    }
    else {
        mobileNav.style.display = "flex";
        navManagement.close();
    }
});
mobileLinks.forEach(element => {
    element.addEventListener('click', () => navManagement.close());
});
