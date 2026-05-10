/// <reference types="jquery" />
// const submit: HTMLSelectElement = document.getElementById("submit") as HTMLSelectElement;
export class RegistrationSystem {
    register(name, surname, mail, group, checked, rodo, counter, register, register_con) {
        if ((name.trim() == "") || (surname.trim() == "") || (mail.trim() == "") || (mail.includes("@") == false) || (checked.length == 0) || (rodo.checked == false)) {
            alert("Uzupełnij wszystkie pola poprawnie.");
            return;
        }
        else {
            this.addToCounter(counter);
            alert("Dziękujemy za zgłoszenie!");
            this.container(true, register, register_con);
            localStorage.setItem("registered", "true");
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
        if (isNaN(registered)) {
            registered = 58;
        }
        registered++;
        localStorage.setItem("counter", registered.toString());
        people.textContent = registered.toString();
    }
    container(b, register, reg_con) {
        if (b) {
            register.addClass("hidden");
            let cont = $("<div />", {
                id: "thanks_con"
            }).appendTo(reg_con);
            $("<a />", {
                id: "thanks",
                text: "Dziękujemy za zgłoszenie",
            }).appendTo(cont);
            $("<button />", {
                id: "thanks",
                class: "buttondef borderb",
                text: "Zarejestruj inną osobę",
                click: () => {
                    cont.remove();
                    register.removeClass("hidden");
                    localStorage.setItem("registered", "false");
                }
            }).appendTo(cont);
        }
        else {
            register.removeClass("hidden");
        }
    }
}
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
