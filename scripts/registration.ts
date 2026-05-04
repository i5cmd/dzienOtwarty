const submit: HTMLSelectElement = document.getElementById("submit") as HTMLSelectElement;

class RegistrationSystem {
    checkInputs(name: string, surname: string, mail: string, group: string, checked: NodeList, rodo: HTMLInputElement, counter: HTMLSpanElement): void {
        if ((name.trim() == "") || (surname.trim() == "") || (mail.trim() == "") || (mail.includes("@") == false) || (checked.length == 0) || (rodo.checked == false)) {
            alert("Uzupełnij wszystkie pola poprawnie.")
            return;
        }
        else {
            this.addToCounter(counter);
            alert("Dziękujemy za zgłoszenie!")
            return this.saveFile(name, surname, mail, group, checked, rodo);
        }
    }
    private saveFile(name: string, surname: string, mail: string, group: string, checked: NodeList, rodo: HTMLInputElement): any {
        let checkedTracks: any[] = [];
        let checkboxArray: Array<any> = Array.from(checked);
        checkboxArray.forEach(cbox => {
            checkedTracks.push((cbox as HTMLInputElement).id)
        });
        let data = {
            name: name,
            surname: surname,
            mail: mail,
            group: group,
            tracks: checkedTracks,
            rodo: rodo.value
        }

        let stringifiedData = JSON.stringify(data);
        let parsedData = JSON.parse(stringifiedData);
        return parsedData;
    }

    private addToCounter(people: HTMLSpanElement) {
        let registered: number = Number(people.textContent);
        registered++;
        localStorage.setItem("counter", registered.toString());
        people.textContent = registered.toString();
    }
}

let registration: RegistrationSystem = new RegistrationSystem();

submit.addEventListener('click', (e) => {
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
});