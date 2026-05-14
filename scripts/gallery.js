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
        image.fadeOut(300);
        this.currentPhoto = no;
        //image.src = `${folder}${photos[this.currentPhoto]}`
        setTimeout(() => {
            image.attr("src", `${folder}${photos[this.currentPhoto]}`);
            image.fadeIn(300);
        }, 250);
    }
    previousPhoto(no, image, photos, folder) {
        image.fadeOut(300);
        setTimeout(() => {
            this.currentPhoto -= no;
            if (this.currentPhoto < 0) {
                this.currentPhoto = photos.length - 1;
            }
            // image.src = `${folder}${photos[this.currentPhoto]}`;
            image.attr("src", `${folder}${photos[this.currentPhoto]}`);
            image.fadeIn(300);
        }, 250);
    }
    nextPhoto(no, image, photos, folder) {
        image.fadeOut(300);
        setTimeout(() => {
            this.currentPhoto += no;
            if (this.currentPhoto >= photos.length) {
                this.currentPhoto = 0;
            }
            // image.src = `${folder}${photos[this.currentPhoto]}`;
            image.attr("src", `${folder}${photos[this.currentPhoto]}`);
            image.fadeIn(300);
        }, 250);
    }
    fullscreenMode(turn, image, fullscreenImage, fullscreenContainer) {
        if (turn) {
            fullscreenImage.css("top", "0px");
            fullscreenImage.css("left", "0px");
            fullscreenImage.css("transform", "scale(1)");
            this.scale = 1;
            fullscreenContainer.css("display", "flex");
            //fullscreenImage.src = image.src;
            fullscreenImage.attr("src", image.attr("src"));
            $("body").attr("data-scroll", "no-scroll");
        }
        else {
            //fullscreenContainer.style.display = "none";
            fullscreenContainer.css("display", "none");
            $("body").removeAttr("data-scroll");
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
                this.scale = 0.2;
            }
            fullscreenImage.css("transform", `scale(${this.scale})`);
        }
        else {
            this.scale -= 0.1;
            if (this.scale <= 0) {
                this.scale = 0.2;
            }
            fullscreenImage.css("transform", `scale(${this.scale})`);
        }
    }
    zoomScroll(event, fullscreenImage) {
        event.preventDefault();
        if (event.deltaY < 0) {
            this.scale += 0.1;
        }
        else if (event.deltaY > 0) {
            this.scale -= 0.1;
        }
        if ((this.scale <= 0) || (this.scale <= 1.38778e-16)) {
            this.scale = 0.2;
        }
        fullscreenImage.css("transform", `scale(${this.scale})`);
    }
    reset(fullscreenImage) {
        fullscreenImage.css("transition", "all 0.2s");
        fullscreenImage.css("top", "0px");
        fullscreenImage.css("left", "0px");
        fullscreenImage.css("transform", "scale(1)");
        this.scale = 1;
        setTimeout(() => {
            fullscreenImage.css("transition", "transform 0.2s");
        }, 250);
    }
    photoGrid(image, photos, folder) {
        let photoIndex = -1;
        photos.forEach((ph, index) => {
            photoIndex++;
            $("<img />", {
                draggable: "false",
                class: "fota",
                src: `${folder}${ph}`
            }).appendTo($("#photos")).attr("data-index", index);
            $(".fota").click((e) => {
                const attr = parseInt(e.currentTarget.getAttribute("data-index"));
                this.currentPhoto = photoIndex;
                this.setPhoto(attr, image, photos, folder);
            });
        });
    }
}
/* leftButton.addEventListener('click', () => galleryManagement.previousPhoto(1));
rightButton.addEventListener('click', () => galleryManagement.nextPhoto(1));
image.addEventListener('click', () => galleryManagement.fullscreenMode(true));
closeFullscreenButton.addEventListener('click', () => galleryManagement.fullscreenMode(false)); */ 
