import { ThemeManager } from "./thememanager.js";
import { RegistrationSystem } from "./registration.js";
const registration = new RegistrationSystem();
const counter = document.getElementById("registered");
counter.textContent = localStorage.getItem("counter") || "58";
const themeManager = new ThemeManager();
const $REG = $("#register");
const $REG_CON = $("#registration");
if (localStorage.getItem("theme") == "dark") {
    themeManager.darkTheme();
}
else {
    themeManager.lightMode();
}
if (localStorage.getItem("registered") == "true") {
    registration.container(true, $REG, $REG_CON);
}
else {
    registration.container(false, $REG, $REG_CON);
}
