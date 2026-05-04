"use strict";
const submit = document.getElementById("submit");
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
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const surInput = document.getElementById("surname");
    const mailInput = document.getElementById("mail");
    const group = document.getElementById("group");
    const checkboxes = document.querySelectorAll(".checkbox:checked");
    const rodo = document.getElementById("rodoiprzetwarzanie");
    const counter = document.getElementById("registered");
    let data = registration.checkInputs(nameInput.value, surInput.value, mailInput.value, group.value, checkboxes, rodo, counter);
    console.log(data);
});
