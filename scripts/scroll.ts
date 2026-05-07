/// <reference types="jquery" />

//const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".navin") as NodeListOf<HTMLAnchorElement>;

class IdNavigation {
    scrollTo(id: string) {
        const target: HTMLDivElement = document.querySelector(id) as HTMLDivElement;
        const distance: number = target.getBoundingClientRect().top;
        window.scrollBy({
            top: distance - 125,
            behavior: "smooth"
        });
    }
}

const idNavigation: IdNavigation = new IdNavigation();

/* links.forEach(link => {
    link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const target: string = (link as HTMLAnchorElement).getAttribute("href")!;
        idNavigation.scrollTo(target);
    });
}); */

$('.navin').click((e) => {
    e.preventDefault();
    const target: string = $(e.currentTarget).attr("href")!;
    idNavigation.scrollTo(target);
})