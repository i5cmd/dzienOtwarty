/// <reference types="jquery" />

// const menuButton: HTMLButtonElement = document.getElementById("menu-button") as HTMLButtonElement;
// const mobileNav: HTMLDivElement = document.getElementById("mobile-nav") as HTMLDivElement;
// const mobileLinks: NodeList = document.querySelectorAll(".mobile-link");

let powered: boolean = false;

export class NavManagement {
    open(): void {
        $('#mobile-nav').css("display", "flex");
        setTimeout(() => {
            $('#mobile-nav').css("transform", "translateX(0)");
        }, 10)
    }
    close(): void {
        $('#mobile-nav').css("transform", "translateX(100%)");
        setTimeout(() => {
            $('#mobile-nav').css("display", "none");
        }, 500)
    }
}


/* mobileLinks.forEach(element => {
    element.addEventListener('click', () => navManagement.close());
}); */
