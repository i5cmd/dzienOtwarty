/// <reference types="jquery" />
export class MoveTop {
    checkPosition(button) {
        if (window.pageYOffset < 300) {
            button.css('display', 'none');
        }
        else {
            button.css('display', 'block');
        }
    }
}
