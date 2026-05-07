"use strict";
/// <reference types="jquery" />
//const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".navin") as NodeListOf<HTMLAnchorElement>;
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
/* links.forEach(link => {
    link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const target: string = (link as HTMLAnchorElement).getAttribute("href")!;
        idNavigation.scrollTo(target);
    });
}); */
$('.navin').click((e) => {
    e.preventDefault();
    const target = $(e.currentTarget).attr("href");
    idNavigation.scrollTo(target);
});
