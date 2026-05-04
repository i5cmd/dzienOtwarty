import { ThemeManager } from "./themeManager.js";
const counter = document.getElementById("registered");
counter.textContent = localStorage.getItem("counter") || "58";
const themeManager = new ThemeManager();
if (localStorage.getItem("theme") == "dark") {
    themeManager.darkTheme();
}
else {
    themeManager.lightMode();
}
