/// <reference types="jquery" />

/* const leftButton: HTMLButtonElement = document.getElementById("leftb") as HTMLButtonElement;
const rightButton: HTMLButtonElement = document.getElementById("rightb") as HTMLButtonElement;
const image: HTMLImageElement = document.getElementById("scrollimg") as HTMLImageElement;

const fullscreenContainer: HTMLDivElement = document.getElementById("fullscreen-image-container") as HTMLDivElement;
const closeFullscreenButton: HTMLButtonElement = document.getElementById("close") as HTMLButtonElement;
const fullscreenImage: HTMLImageElement = document.getElementById("fullscreen-image") as HTMLImageElement; */

export class GalleryManagement {
    currentPhoto: number = 0;
    holding: boolean = false;
    scale: number = 1;
    setPhoto(no: number, image: JQuery<HTMLImageElement>, photos: Array<String>, folder: string): void {
        this.currentPhoto = no;
        //image.src = `${folder}${photos[this.currentPhoto]}`
        image.css("src", `${folder}${photos[this.currentPhoto]}`);
    }
    previousPhoto(no: number, image: JQuery<HTMLImageElement>, photos: Array<String>, folder: string): void {
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
    nextPhoto(no: number, image: JQuery<HTMLImageElement>, photos: Array<String>, folder: string): void {
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
    fullscreenMode(turn: boolean, image: JQuery<HTMLImageElement>, fullscreenImage: JQuery<HTMLImageElement>, fullscreenContainer: JQuery<HTMLDivElement>): void {
        if (turn) {
            fullscreenImage.css("top", "0px");
            fullscreenImage.css("left", "0px");
            fullscreenImage.css("transform", "scale(1)");
            this.scale = 1;
            fullscreenContainer.css("display", "flex");
            //fullscreenImage.src = image.src;
            fullscreenImage.attr("src", image.attr("src")!);
            $("body").attr("data-scroll", "no-scroll");
        }
        else {
            //fullscreenContainer.style.display = "none";
            fullscreenContainer.css("display", "none");
            $("body").removeAttr("data-scroll")
        }
    }
    grabPhoto(photoBool: boolean, e: PointerEvent, fullscreenImage: JQuery<HTMLImageElement>): void {
        let startX: number = e.pageX; // zdobadz pierwotne pozycje
        let startY: number = e.pageY;
        let deltaX: number = 0;
        let deltaY: number = 0;
        let locationY: any = null
        let locationX: any = null
        if (photoBool) {
            $("html").on("pointermove", (e: any) => moveImage(e));
            locationY = document.documentElement.scrollTop;
            locationX = document.documentElement.scrollLeft;
        }
        else {
            $("html").off("pointermove");
        }
        function moveImage(e: PointerEvent) {
            document.documentElement.scrollTop = locationY;
            document.documentElement.scrollLeft = locationX;
            deltaX = e.pageX - startX; // oblicz ile kratek sie ruszyl obrazek
            deltaY = e.pageY - startY;

            fullscreenImage.offset({
                "top": fullscreenImage.offset()!.top + deltaY, // naloz na obrazek
                "left": fullscreenImage.offset()!.left + deltaX,
            }) 

            startX = e.pageX; // zdobadz stara pozycje na pozniej
            startY = e.pageY;
        }
    }
    zoom(photoBool: boolean, fullscreenImage: JQuery<HTMLImageElement>): void {
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
    zoomScroll(event: WheelEvent, fullscreenImage: JQuery<HTMLImageElement>): void {
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
    reset(fullscreenImage: JQuery<HTMLImageElement>) {
        fullscreenImage.css("transition", "all 0.2s")
        fullscreenImage.css("top", "0px");
        fullscreenImage.css("left", "0px");
        fullscreenImage.css("transform", "scale(1)");
        this.scale = 1;
        setTimeout(() => {
            fullscreenImage.css("transition", "transform 0.2s")
        }, 250)
    }
}

/* leftButton.addEventListener('click', () => galleryManagement.previousPhoto(1));
rightButton.addEventListener('click', () => galleryManagement.nextPhoto(1));
image.addEventListener('click', () => galleryManagement.fullscreenMode(true));
closeFullscreenButton.addEventListener('click', () => galleryManagement.fullscreenMode(false)); */