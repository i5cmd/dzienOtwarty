/// <reference types="jquery" />
/* const leftButton: HTMLButtonElement = document.getElementById("leftb") as HTMLButtonElement;
const rightButton: HTMLButtonElement = document.getElementById("rightb") as HTMLButtonElement;
const image: HTMLImageElement = document.getElementById("scrollimg") as HTMLImageElement;

const fullscreenContainer: HTMLDivElement = document.getElementById("fullscreen-image-container") as HTMLDivElement;
const closeFullscreenButton: HTMLButtonElement = document.getElementById("close") as HTMLButtonElement;
const fullscreenImage: HTMLImageElement = document.getElementById("fullscreen-image") as HTMLImageElement; */
export class GalleryManagement {
    currentPhoto = 0;
    holding = false;
    scale = 1;
    setPhoto(no, image, photos, folder) {
        this.currentPhoto = no;
        //image.src = `${folder}${photos[this.currentPhoto]}`
        image.css("src", `${folder}${photos[this.currentPhoto]}`);
    }
    previousPhoto(no, image, photos, folder) {
        image.fadeOut(500);
        setTimeout(() => {
            this.currentPhoto -= no;
            if (this.currentPhoto < 0) {
                this.currentPhoto = photos.length - 1;
            }
            // image.src = `${folder}${photos[this.currentPhoto]}`;
            image.attr("src", `${folder}${photos[this.currentPhoto]}`);
            image.fadeIn(500);
        }, 450);
    }
    nextPhoto(no, image, photos, folder) {
        image.fadeOut(500);
        setTimeout(() => {
            this.currentPhoto += no;
            if (this.currentPhoto >= photos.length) {
                this.currentPhoto = 0;
            }
            // image.src = `${folder}${photos[this.currentPhoto]}`;
            image.attr("src", `${folder}${photos[this.currentPhoto]}`);
            image.fadeIn(500);
        }, 450);
    }
    fullscreenMode(turn, image, fullscreenImage, fullscreenContainer) {
        if (turn) {
            fullscreenImage.css("top", "0px");
            fullscreenImage.css("left", "0px");
            fullscreenImage.css("transform", "scale(1)");
            fullscreenContainer.css("display", "flex");
            //fullscreenImage.src = image.src;
            fullscreenImage.attr("src", image.attr("src"));
        }
        else {
            //fullscreenContainer.style.display = "none";
            fullscreenContainer.css("display", "none");
        }
    }
    grabPhoto(photoBool, e, fullscreenImage) {
        let startX = e.pageX; // zdobadz pierwotne pozycje
        let startY = e.pageY;
        let deltaX = 0;
        let deltaY = 0;
        let locationY = null;
        let locationX = null;
        if (photoBool) {
            $("html").on("pointermove", (e) => moveImage(e));
            locationY = document.documentElement.scrollTop;
            locationX = document.documentElement.scrollLeft;
        }
        else {
            $("html").off("pointermove");
        }
        function moveImage(e) {
            document.documentElement.scrollTop = locationY;
            document.documentElement.scrollLeft = locationX;
            deltaX = e.pageX - startX; // oblicz ile kratek sie ruszyl obrazek
            deltaY = e.pageY - startY;
            fullscreenImage.offset({
                "top": fullscreenImage.offset().top + deltaY, // naloz na obrazek
                "left": fullscreenImage.offset().left + deltaX,
            });
            startX = e.pageX; // zdobadz stara pozycje na pozniej
            startY = e.pageY;
        }
    }
    zoom(photoBool, fullscreenImage) {
        if (photoBool) {
            this.scale += 0.1;
            if (this.scale <= 0) {
                this.scale = 0.1;
            }
            fullscreenImage.css("transform", `scale(${this.scale})`);
        }
        else {
            this.scale -= 0.1;
            if (this.scale <= 0) {
                this.scale = 0.1;
            }
            fullscreenImage.css("transform", `scale(${this.scale})`);
        }
    }
}
/* leftButton.addEventListener('click', () => galleryManagement.previousPhoto(1));
rightButton.addEventListener('click', () => galleryManagement.nextPhoto(1));
image.addEventListener('click', () => galleryManagement.fullscreenMode(true));
closeFullscreenButton.addEventListener('click', () => galleryManagement.fullscreenMode(false)); */ 
