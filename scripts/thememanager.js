const modeButton = document.getElementById("site-mode-button");
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
    loadTheme(theme) {
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
const themeManager = new ThemeManager();
modeButton.addEventListener('click', () => {
    theme = !theme;
    themeManager.loadTheme(theme);
});
