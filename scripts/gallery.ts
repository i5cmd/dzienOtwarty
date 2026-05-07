/// <reference types="jquery" />

const leftButton: HTMLButtonElement = document.getElementById("leftb") as HTMLButtonElement;
const rightButton: HTMLButtonElement = document.getElementById("rightb") as HTMLButtonElement;
const image: HTMLImageElement = document.getElementById("scrollimg") as HTMLImageElement;
const photos: Array<String> = ["1.jpg", "2.jpg", "3.jpg"];
const folder: string = "assets/zdjecia/"

const fullscreenContainer: HTMLDivElement = document.getElementById("fullscreen-image-container") as HTMLDivElement;
const closeFullscreenButton: HTMLButtonElement = document.getElementById("close") as HTMLButtonElement;
const fullscreenImage: HTMLImageElement = document.getElementById("fullscreen-image") as HTMLImageElement;

class GalleryManagement {
    currentPhoto: number = 0;
    setPhoto(no: number): void {
        this.currentPhoto = no;
        image.src = `${folder}${photos[this.currentPhoto]}`
    }
    previousPhoto(no: number): void {
        $(image).fadeOut(500);
        setTimeout(() => { 
            this.currentPhoto -= no;
            if (this.currentPhoto < 0) {
                this.currentPhoto = photos.length - 1;
            }
            image.src = `${folder}${photos[this.currentPhoto]}`;
            $(image).fadeIn(500);
        }, 450);
    }
    nextPhoto(no: number): void {
        $(image).fadeOut(500);
        setTimeout(() => { 
            this.currentPhoto += no;
            if (this.currentPhoto >= photos.length) {
                this.currentPhoto = 0;
            }
            image.src = `${folder}${photos[this.currentPhoto]}`;
            $(image).fadeIn(500);
        }, 450);
    }
    fullscreenMode(turn: boolean): void {
        if (turn) {
            $(fullscreenContainer).css("display", "flex");
            fullscreenImage.src = image.src;
        }
        else {
            fullscreenContainer.style.display = "none";
        }
    }
}

const galleryManagement: GalleryManagement = new GalleryManagement();

leftButton.addEventListener('click', () => galleryManagement.previousPhoto(1));
rightButton.addEventListener('click', () => galleryManagement.nextPhoto(1));
image.addEventListener('click', () => galleryManagement.fullscreenMode(true));
closeFullscreenButton.addEventListener('click', () => galleryManagement.fullscreenMode(false));

galleryManagement.setPhoto(0);