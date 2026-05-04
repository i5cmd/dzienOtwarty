import { ThemeManager } from "./themeManager.js";

const counter: HTMLSpanElement = document.getElementById("registered") as HTMLSpanElement;
counter.textContent = (localStorage.getItem("counter") as string) || "58";

const themeManager: ThemeManager = new ThemeManager();
if (localStorage.getItem("theme") == "dark") {
    themeManager.darkTheme();
}
else {
    themeManager.lightMode();
}