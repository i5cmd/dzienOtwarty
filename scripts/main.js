// drogi panie Dziewulski, ja bym bardzo chcial zadeklarowac te wartosci jQuery jako zwykle stale, bo czysciej, a ja lubie czyste buty... (ostatnio musialem chodzic butami po polu ziemniakow bo koledze sie zachcialo. ale tu doslownie, mam buty z blota)
// mam nadzieje, ze pan mnie nie zabije za to. 😔😔😔
// klasy
import { RegistrationSystem } from "./registration.js";
import { ThemeManager, theme } from "./thememanager.js";
import { IdNavigation } from "./scroll.js";
import { NavManagement } from "./mobilenav.js";
import { FilterSchedule } from "./schedule.js";
import { GalleryManagement } from "./gallery.js";
const registration = new RegistrationSystem();
const themeManager = new ThemeManager();
const idNav = new IdNavigation();
const navManagement = new NavManagement();
const filterSchedule = new FilterSchedule();
const galleryManagement = new GalleryManagement();
// zmienne
let themeLocal = theme; // motyw
let powered = false; // mobilenav
// elementy
// rejestracja
const $SUBMIT_REG = $("#submit");
const $REGNUM = $("#registered")[0];
const $REG = $("#register");
const $REG_CON = $("#registration");
// motyw
const $THEME_BUT = $("#site-mode-button");
// scroll
const $NAV_LINK = $(".navin");
const $REGISTER_BUT = $("#regButton");
// mobilna nawigacja
const $MOBILE_NAV_B = $('#menu-button');
const $MOBILE_LINK = $(".mobile-link");
// harmonogram
const $FILTER = $("#filter");
// const rows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll("tr") as NodeListOf<HTMLTableRowElement>;
const $ROW = $("tr");
// galeria
const $LEFT_GALLERY_BUTTON = $("#leftb");
const $RIGHT_GALLERY_BUTTON = $("#rightb");
const $GALLERY_IMAGE = $("#scrollimg");
const photos = ["1.jpg", "2.jpg", "3.jpg"];
const folder = "assets/zdjecia/";
const $FULLSCREEN_CONTAINER = $("#fullscreen-image-container");
const $CLOSE_FLSC = $("#close");
const $FULLSCREEN_IMAGE = $("#fullscreen-image");
const $ZOOM_IN_BUTTON = $("#zoomin");
const $ZOOM_OUT_BUTTON = $("#zoomout");
const $RESET_BUTTON = $("#reset");
// ------------------
// rejestracja
$SUBMIT_REG.click((e) => {
    const $USERNAME = $("#name");
    const $USERSURNAME = $("#surname");
    const $EMAIL = $("#mail");
    const $GROUP = $("#group");
    const checkboxes = document.querySelectorAll(".checkbox:checked"); // nwm jak interpretowac nodelist w jquery, wiec tak to zostawiam bo dziala lol
    const $RODO = $("#rodoiprzetwarzanie")[0]; // [0] bo to checkbox itd. nawet jak jest id, to jq to traktuje jak ala tablice. taka notka dla mnie lmao
    e.preventDefault();
    let data = registration.register($USERNAME.val(), $USERSURNAME.val(), $EMAIL.val(), $GROUP.val(), checkboxes, $RODO, $REGNUM, $REG, $REG_CON);
    console.log(data);
});
// motyw
$THEME_BUT.click(() => {
    themeLocal = !themeLocal;
    themeManager.loadTheme(themeLocal);
});
// scroll
$NAV_LINK.click((e) => {
    e.preventDefault();
    const target = $(e.currentTarget).attr("href");
    idNav.scrollTo(target);
});
$REGISTER_BUT.click((e) => {
    e.preventDefault();
    const target = $("#regButton").attr("href");
    idNav.scrollTo(target);
});
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
});
$MOBILE_LINK.click(() => navManagement.close());
// harmonogram
$FILTER.on("change", () => filterSchedule.filterTable($FILTER.val(), $ROW));
/* rows.forEach(row => {
    row.addEventListener('click', () => {
        filterSchedule.checkRow(row);
    });
}); */
$ROW.click((e) => filterSchedule.checkRow($(e.currentTarget)));
// galeria
galleryManagement.setPhoto(0, $GALLERY_IMAGE, photos, folder);
$LEFT_GALLERY_BUTTON.click(() => galleryManagement.previousPhoto(1, $GALLERY_IMAGE, photos, folder));
$RIGHT_GALLERY_BUTTON.click(() => galleryManagement.nextPhoto(1, $GALLERY_IMAGE, photos, folder));
$GALLERY_IMAGE.click(() => galleryManagement.fullscreenMode(true, $GALLERY_IMAGE, $FULLSCREEN_IMAGE, $FULLSCREEN_CONTAINER));
$CLOSE_FLSC.click(() => galleryManagement.fullscreenMode(false, $GALLERY_IMAGE, $FULLSCREEN_IMAGE, $FULLSCREEN_CONTAINER));
$FULLSCREEN_IMAGE.on("pointerdown", (e) => galleryManagement.grabPhoto(true, e, $FULLSCREEN_IMAGE));
$FULLSCREEN_IMAGE.on("pointerup", (e) => galleryManagement.grabPhoto(false, e, $FULLSCREEN_IMAGE));
$FULLSCREEN_CONTAINER.on("pointerup", (e) => galleryManagement.grabPhoto(false, e, $FULLSCREEN_IMAGE));
$ZOOM_IN_BUTTON.click(() => galleryManagement.zoom(true, $FULLSCREEN_IMAGE));
$ZOOM_OUT_BUTTON.click(() => galleryManagement.zoom(false, $FULLSCREEN_IMAGE));
$FULLSCREEN_IMAGE.on("wheel", (e) => {
    let event = e.originalEvent;
    galleryManagement.zoomScroll(event, $FULLSCREEN_IMAGE);
});
$RESET_BUTTON.click(() => galleryManagement.reset($FULLSCREEN_IMAGE));
//$FULLSCREEN_CONTAINER.scroll((e: any) => galleryManagement.zoomScroll(e, $FULLSCREEN_IMAGE));
