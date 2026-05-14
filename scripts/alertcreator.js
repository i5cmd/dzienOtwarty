/// <reference types="jquery" />
export class AlertCreator {
    Alert(title, content) {
        $("<div />", {
            id: "alert-container",
        }).prependTo($("body"));
        $("html").attr("data-scroll", "no-scroll");
        $("<div />", {
            id: "alert-window",
        }).appendTo($("#alert-container"));
        $("<div />", {
            id: "window-name",
        }).appendTo($("#alert-window"));
        $("<h3 />", {
            text: title
        }).appendTo($("#window-name"));
        $("<div />", {
            id: "window-content",
        }).appendTo($("#alert-window"));
        $("<p />", {
            text: content
        }).appendTo($("#window-content"));
        $("<div />", {
            id: "window-controls",
        }).appendTo($("#alert-window"));
        $("<button />", {
            class: "borderb buttondefsmall",
            text: "OK",
            click: () => { this.removeAlert(); }
        }).appendTo($("#window-controls")).css("cursor", "pointer");
        $("#alert-container").hide();
        $("#alert-window").css("transform", "scale(0.7)");
        setTimeout(() => {
            $("#alert-container").fadeIn(100);
            $("#alert-window").css("transform", "scale(1)");
        }, 101);
    }
    removeAlert() {
        $("#alert-container").fadeOut(100);
        setTimeout(() => {
            $("#alert-container").remove();
        }, 101);
        $("html").removeAttr("data-scroll");
    }
}
