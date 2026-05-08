// drogi panie Dziewulski, ja bym bardzo chcial zadeklarowac te wartosci jQuery jako zwykle stale, bo czysciej, a ja lubie czyste buty... (ostatnio musialem chodzic butami po polu ziemniakow bo koledze sie zachcialo. ale tu doslownie, mam buty z blota)
// mam nadzieje, ze pan mnie nie zabije za to. 😔😔😔

// klasy
import { RegistrationSystem } from "./registration.js"; 
import { ThemeManager, theme } from "./thememanager.js";
import { IdNavigation } from "./scroll.js";
import { NavManagement } from "./mobilenav.js";
import { FilterSchedule } from "./schedule.js";

const registration: RegistrationSystem = new RegistrationSystem();
const themeManager: ThemeManager = new ThemeManager();
const idNav: IdNavigation = new IdNavigation();
const navManagement: NavManagement = new NavManagement();
const filterSchedule: FilterSchedule = new FilterSchedule();

// zmienne

let themeLocal = theme; // motyw
let powered: boolean = false; // mobilenav

// elementy
// rejestracja
const $SUBMIT_REG: JQuery<HTMLInputElement> = $("#submit");
const $USERNAME: JQuery<HTMLInputElement> = $("#name");
const $USERSURNAME: JQuery<HTMLInputElement> = $("#surname");
const $EMAIL: JQuery<HTMLInputElement> = $("#mail");
const $GROUP: JQuery<HTMLSelectElement> = $("#group");
const checkboxes: NodeList = document.querySelectorAll(".checkbox:checked"); // nwm jak interpretowac nodelist w jquery, wiec tak to zostawiam bo dziala lol
const $RODO: HTMLInputElement = $("#rodoiprzetwarzanie")[0] as HTMLInputElement; // [0] bo to checkbox itd. nawet jak jest id, to jq to traktuje jak ala tablice. taka notka dla mnie lmao
const $REGNUM: HTMLSpanElement = $("#registered")[0] as HTMLSpanElement;

// motyw
const $THEME_BUT: JQuery<HTMLButtonElement> = $("#site-mode-button");

// scroll
const $NAV_LINK: JQuery<HTMLAnchorElement> = $(".navin");
const $REGISTER_BUT: JQuery<HTMLButtonElement> = $("#regButton");

// mobilna nawigacja
const $MOBILE_NAV_B: JQuery<HTMLButtonElement> = $('#menu-button');
const $MOBILE_LINK: JQuery<HTMLAnchorElement> = $(".mobile-link");

// harmonogram
const $FILTER: JQuery<HTMLSelectElement> = $("#filter");
// const rows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll("tr") as NodeListOf<HTMLTableRowElement>;
const $ROW: JQuery<HTMLTableRowElement> = $("tr");

// ------------------

// rejestracja

$SUBMIT_REG.click((e) => {
    e.preventDefault();
    let data: any = registration.register($USERNAME.val() as string, $USERSURNAME.val() as string, $EMAIL.val() as string, $GROUP.val() as string, checkboxes, $RODO, $REGNUM);
    console.log(data);
})

// motyw

$THEME_BUT.click(() => {
    themeLocal = !themeLocal;
    themeManager.loadTheme(themeLocal);
})

// scroll

$NAV_LINK.click((e) => {
    e.preventDefault();
    const target: string = $(e.currentTarget).attr("href")!;
    idNav.scrollTo(target);
})

$REGISTER_BUT.click((e) => {
    e.preventDefault();
    const target: string = $("#regButton").attr("href")!;
    idNav.scrollTo(target);
})

// mobile nawigacja

$MOBILE_NAV_B.click(() => {
    powered = !powered;
    if (powered) {
        navManagement.open();
    }
    else {
        $MOBILE_NAV_B.css("display", "flex");
        navManagement.close();
    }
})

$MOBILE_LINK.click(() => navManagement.close());

// harmonogram

$FILTER.on("change", () => filterSchedule.filterTable($FILTER.val() as string, $ROW))

/* rows.forEach(row => {
    row.addEventListener('click', () => {
        filterSchedule.checkRow(row);
    });
}); */

$ROW.click((e) => filterSchedule.checkRow($(e.currentTarget as HTMLTableRowElement)));

// galeria

