/// <reference types="jquery" />
// const modeButton: HTMLButtonElement = document.getElementById("site-mode-button") as HTMLButtonElement;

export let theme = false;

export class ThemeManager {
    darkTheme() {
        //document.documentElement.setAttribute("data-theme", "dark");
        $("html").attr("data-theme", "dark");
        theme = true;
    }
    lightMode() {
        //document.documentElement.removeAttribute("data-theme");
        $("html").removeAttr("data-theme");
        theme = false;
    }
    loadTheme(themeGot: boolean) {
        if (themeGot) {
            this.darkTheme();
            theme = themeGot;
            localStorage.setItem("theme", "dark");
        }
        else {
            this.lightMode();
            theme = themeGot;
            localStorage.setItem("theme", "light");
        }
    }
}   

/* modeButton.addEventListener('click', () => {
    theme = !theme;

    themeManager.loadTheme(theme);
}); */

