/// <reference types="jquery" />

export class MoveTop {
    checkPosition(button: JQuery<HTMLButtonElement>) {
        if (window.pageYOffset < 300) {
            button.css('display', 'none');
        }
        else {
            button.css('display', 'block');
        }
    }
}