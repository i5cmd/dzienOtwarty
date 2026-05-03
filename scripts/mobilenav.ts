const menuButton: HTMLButtonElement = document.getElementById("menu-button") as HTMLButtonElement;
const mobileNav: HTMLDivElement = document.getElementById("mobile-nav") as HTMLDivElement;
const mobileLinks: NodeList = document.querySelectorAll(".mobile-link");

let powered: boolean = false;

class NavManagement {
    open(): void {
        mobileNav.style.display = "flex";
        setTimeout(() => {
            mobileNav.style.transform = "translateX(0)";
        }, 500)
    }
    close(): void {
        mobileNav.style.transform = "translateX(100%)";

        setTimeout(() => {
            mobileNav.style.display = "none";
        }, 500)
    }
}

const navManagement: NavManagement = new NavManagement();

menuButton.addEventListener('click', () => {
    powered = !powered;
    if (powered) {
        navManagement.open();
    }
    else {
        mobileNav.style.display = "flex";
        navManagement.close();
    }
})

mobileLinks.forEach(element => {
    element.addEventListener('click', () => {
        navManagement.close();
    })
});