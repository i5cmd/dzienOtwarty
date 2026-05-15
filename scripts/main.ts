// drogi panie Dziewulski, ja bym bardzo chcial zadeklarowac te wartosci jQuery jako zwykle stale, bo czysciej, a ja lubie czyste buty... (ostatnio musialem chodzic butami po polu ziemniakow bo koledze sie zachcialo. ale tu doslownie, mam buty z blota)
// mam nadzieje, ze pan mnie nie zabije za to. 😔😔😔

// klasy
import { RegistrationSystem } from "./registration.js"; 
import { ThemeManager, theme } from "./thememanager.js";
import { IdNavigation } from "./scroll.js";
import { NavManagement } from "./mobilenav.js";
import { FilterSchedule } from "./schedule.js";
import { GalleryManagement } from "./gallery.js";
import { MoveTop } from "./move-topbutton.js";
import { AlertCreator } from "./alertcreator.js";

// zmienne

let themeLocal = theme; // motyw
let powered: boolean = false; // mobilenav

// elementy
// rejestracja
const $SUBMIT_REG: JQuery<HTMLInputElement> = $("#submit");
const $REGNUM: HTMLSpanElement = $("#registered")[0] as HTMLSpanElement;

const $REG: JQuery<HTMLDivElement> = $("#register");
const $REG_CON: JQuery<HTMLDivElement> = $("#registration");

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

// galeria
const $LEFT_GALLERY_BUTTON: JQuery<HTMLButtonElement> = $("#leftb");
const $RIGHT_GALLERY_BUTTON: JQuery<HTMLButtonElement> = $("#rightb");
const $GALLERY_IMAGE: JQuery<HTMLImageElement> = $("#scrollimg");
const photos: Array<string> = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
const folder: string = "assets/zdjecia/"
const $FULLSCREEN_CONTAINER: JQuery<HTMLDivElement> = $("#fullscreen-image-container");
const $CLOSE_FLSC: JQuery<HTMLButtonElement> = $("#close");
const $FULLSCREEN_IMAGE: JQuery<HTMLImageElement> = $("#fullscreen-image");
const $ZOOM_IN_BUTTON: JQuery<HTMLButtonElement> = $("#zoomin");
const $ZOOM_OUT_BUTTON: JQuery<HTMLButtonElement> = $("#zoomout");
const $RESET_BUTTON: JQuery<HTMLButtonElement> = $("#reset");

// move top
const $MOVE_BUTTON: JQuery<HTMLButtonElement> = $("#movetopbutton");

// ------------------

const registration: RegistrationSystem = new RegistrationSystem();
const themeManager: ThemeManager = new ThemeManager();
const idNav: IdNavigation = new IdNavigation();
const navManagement: NavManagement = new NavManagement();
const filterSchedule: FilterSchedule = new FilterSchedule();
const galleryManagement: GalleryManagement = new GalleryManagement($GALLERY_IMAGE, photos, folder, $FULLSCREEN_IMAGE, $FULLSCREEN_CONTAINER);
const moveTop: MoveTop = new MoveTop();

// rejestracja

$SUBMIT_REG.click((e) => {
    const $USERNAME: JQuery<HTMLInputElement> = $("#name");
    const $USERSURNAME: JQuery<HTMLInputElement> = $("#surname");
    const $EMAIL: JQuery<HTMLInputElement> = $("#mail");
    const $GROUP: JQuery<HTMLSelectElement> = $("#group");
    const checkboxes: NodeList = document.querySelectorAll(".checkbox:checked"); // nwm jak interpretowac nodelist w jquery, wiec tak to zostawiam bo dziala lol
    const $RODO: HTMLInputElement = $("#rodoiprzetwarzanie")[0] as HTMLInputElement; // [0] bo to checkbox itd. nawet jak jest id, to jq to traktuje jak ala tablice. taka notka dla mnie lmao
    const $FORM: HTMLFormElement = $("#form-registration")[0] as HTMLFormElement;
    e.preventDefault();
    let data: any = registration.register($USERNAME.val() as string, $USERSURNAME.val() as string, $EMAIL.val() as string, $GROUP.val() as string, checkboxes, $RODO, $REGNUM, $REG, $REG_CON, $FORM);
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
    $MOVE_BUTTON.css('display', 'block');
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

galleryManagement.setPhoto(0);
galleryManagement.photoGrid();

$LEFT_GALLERY_BUTTON.click(() => galleryManagement.previousPhoto(1));
$RIGHT_GALLERY_BUTTON.click(() => galleryManagement.nextPhoto(1));
$GALLERY_IMAGE.click(() => galleryManagement.fullscreenMode(true, $FULLSCREEN_CONTAINER));
$CLOSE_FLSC.click(() => galleryManagement.fullscreenMode(false, $FULLSCREEN_CONTAINER));
$FULLSCREEN_IMAGE.on("pointerdown", (e: any) => galleryManagement.grabPhoto(true, e, $FULLSCREEN_IMAGE));
// $FULLSCREEN_IMAGE.on("touchstart", (e: any) => galleryManagement.grabPhotoMobile(true, e, $FULLSCREEN_IMAGE)); wyjasnienie w galleryManagement
$FULLSCREEN_IMAGE.on("pointerup", (e: any) => galleryManagement.grabPhoto(false, e, $FULLSCREEN_IMAGE));
// $FULLSCREEN_IMAGE.on("touchend", (e: any) => galleryManagement.grabPhotoMobile(false, e, $FULLSCREEN_IMAGE));
$FULLSCREEN_CONTAINER.on("pointerup", (e: any) => galleryManagement.grabPhoto(false, e, $FULLSCREEN_IMAGE));
$ZOOM_IN_BUTTON.click(() => galleryManagement.zoom(true));
$ZOOM_OUT_BUTTON.click(() => galleryManagement.zoom(false));
$FULLSCREEN_IMAGE.on("wheel", (e: JQuery.TriggeredEvent) => {
    let event = e.originalEvent! as WheelEvent;
    galleryManagement.zoomScroll(event, $FULLSCREEN_IMAGE);
});
$RESET_BUTTON.click(() => galleryManagement.reset());



//$FULLSCREEN_CONTAINER.scroll((e: any) => galleryManagement.zoomScroll(e, $FULLSCREEN_IMAGE));

// move
$MOVE_BUTTON.click(() => {
    idNav.scrollTop();
    $MOVE_BUTTON.css('display', 'none');
});

$('html').on("wheel", () => {
    moveTop.checkPosition($MOVE_BUTTON);
})

