"use strict";
const links = document.querySelectorAll(".navin");
class IdNavigation {
    scrollTo(id) {
        const target = document.querySelector(id);
        const distance = target.getBoundingClientRect().top;
        window.scrollBy({
            top: distance - 125,
            behavior: "smooth"
        });
    }
}
const idNavigation = new IdNavigation();
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");
        idNavigation.scrollTo(target);
    });
});
