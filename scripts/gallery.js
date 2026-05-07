"use strict";
/// <reference types="jquery" />
const leftButton = document.getElementById("leftb");
const rightButton = document.getElementById("rightb");
const image = document.getElementById("scrollimg");
const photos = ["1.jpg", "2.jpg", "3.jpg"];
const folder = "assets/zdjecia/";
const fullscreenContainer = document.getElementById("fullscreen-image-container");
const closeFullscreenButton = document.getElementById("close");
const fullscreenImage = document.getElementById("fullscreen-image");
class GalleryManagement {
    currentPhoto = 0;
    setPhoto(no) {
        this.currentPhoto = no;
        image.src = `${folder}${photos[this.currentPhoto]}`;
    }
    previousPhoto(no) {
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
    nextPhoto(no) {
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
    fullscreenMode(turn) {
        if (turn) {
            $(fullscreenContainer).css("display", "flex");
            fullscreenImage.src = image.src;
        }
        else {
            fullscreenContainer.style.display = "none";
        }
    }
}
const galleryManagement = new GalleryManagement();
leftButton.addEventListener('click', () => galleryManagement.previousPhoto(1));
rightButton.addEventListener('click', () => galleryManagement.nextPhoto(1));
image.addEventListener('click', () => galleryManagement.fullscreenMode(true));
closeFullscreenButton.addEventListener('click', () => galleryManagement.fullscreenMode(false));
galleryManagement.setPhoto(0);
