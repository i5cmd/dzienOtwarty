"use strict";
/// <reference types="jquery" />
// const submit: HTMLSelectElement = document.getElementById("submit") as HTMLSelectElement;
class RegistrationSystem {
    checkInputs(name, surname, mail, group, checked, rodo, counter) {
        if ((name.trim() == "") || (surname.trim() == "") || (mail.trim() == "") || (mail.includes("@") == false) || (checked.length == 0) || (rodo.checked == false)) {
            alert("Uzupełnij wszystkie pola poprawnie.");
            return;
        }
        else {
            this.addToCounter(counter);
            alert("Dziękujemy za zgłoszenie!");
            return this.saveFile(name, surname, mail, group, checked, rodo);
        }
    }
    saveFile(name, surname, mail, group, checked, rodo) {
        let checkedTracks = [];
        let checkboxArray = Array.from(checked);
        checkboxArray.forEach(cbox => {
            checkedTracks.push(cbox.id);
        });
        let data = {
            name: name,
            surname: surname,
            mail: mail,
            group: group,
            tracks: checkedTracks,
            rodo: rodo.value
        };
        let stringifiedData = JSON.stringify(data);
        let parsedData = JSON.parse(stringifiedData);
        return parsedData;
    }
    addToCounter(people) {
        let registered = Number(people.textContent);
        registered++;
        localStorage.setItem("counter", registered.toString());
        people.textContent = registered.toString();
    }
}
let registration = new RegistrationSystem();
/* submit.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
    const surInput: HTMLInputElement = document.getElementById("surname") as HTMLInputElement;
    const mailInput: HTMLInputElement = document.getElementById("mail") as HTMLInputElement;
    const group: HTMLSelectElement = document.getElementById("group") as HTMLSelectElement;
    const checkboxes: NodeList = document.querySelectorAll(".checkbox:checked");
    const rodo: HTMLInputElement = document.getElementById("rodoiprzetwarzanie") as HTMLInputElement;
    const counter: HTMLSpanElement = document.getElementById("registered") as HTMLSpanElement;
    let data: any = registration.checkInputs(nameInput.value, surInput.value, mailInput.value, group.value, checkboxes, rodo, counter);

    console.log(data);
}); */
$("#submit").click((e) => {
    e.preventDefault();
    const checkboxes = document.querySelectorAll(".checkbox:checked");
    let data = registration.checkInputs($("#name").val(), $("#surname").val(), $("#mail").val(), $("#group").val(), checkboxes, $("#rodoiprzetwarzanie")[0], $("#registered")[0]);
    console.log(data);
});
