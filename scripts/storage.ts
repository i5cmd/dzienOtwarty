import { ThemeManager } from "./thememanager.js";
import { RegistrationSystem } from "./registration.js"; 
const registration: RegistrationSystem = new RegistrationSystem();

const counter: HTMLSpanElement = document.getElementById("registered") as HTMLSpanElement;
counter.textContent = (localStorage.getItem("counter") as string) || "58";

const themeManager: ThemeManager = new ThemeManager();

const $REG: JQuery<HTMLDivElement> = $("#register");
const $REG_CON: JQuery<HTMLDivElement> = $("#registration");

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