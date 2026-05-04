const modeButton: HTMLButtonElement = document.getElementById("site-mode-button") as HTMLButtonElement;

let theme = false;

export class ThemeManager {
    darkTheme() {
        document.documentElement.setAttribute("data-theme", "dark");
        theme = true;
    }
    lightMode() {
        document.documentElement.removeAttribute("data-theme");
        theme = false;
    }
    loadTheme(theme: boolean) {
        if (theme) {
            this.darkTheme();
            localStorage.setItem("theme", "dark");
        }
        else {
            this.lightMode();
            localStorage.setItem("theme", "light");
        }
    }
}   

const themeManager: ThemeManager = new ThemeManager();

modeButton.addEventListener('click', () => {
    theme = !theme;

    themeManager.loadTheme(theme);
});