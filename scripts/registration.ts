/// <reference types="jquery" />
// const submit: HTMLSelectElement = document.getElementById("submit") as HTMLSelectElement;

import { AlertCreator } from "./alertcreator.js";
const alerts: AlertCreator = new AlertCreator();


export class RegistrationSystem {
    constructor(
        private prefix: string[] = [".ac", ".ad", ".ae", ".af", ".ag", ".ai", ".al", ".am", ".ao", ".aq", ".ar", ".as", ".at", ".au", ".aw", ".ax", ".az", ".ba", ".bb", ".bd", ".be", ".bf", ".bg", ".bh", ".bi", ".bj", ".bm", ".bn", ".bo", ".bq", ".br", ".bs", ".bt", ".bw", ".by", ".bz", ".ca", ".cc", ".cd", ".cf", ".cg", ".ch", ".ci", ".ck", ".cl", ".cm", ".cn", ".co", ".cr", ".cu", ".cv", ".cw", ".cx", ".cy", ".cz", ".de", ".dj", ".dk", ".dm", ".do", ".dz", ".ec", ".ee", ".eg", ".eh", ".er", ".es", ".et", ".eu", ".fi", ".fj", ".fk", ".fm", ".fo", ".fr", ".ga", ".gd", ".ge", ".gf", ".gg", ".gh", ".gi", ".gl", ".gm", ".gn", ".gp", ".gq", ".gr", ".gs", ".gt", ".gu", ".gw", ".gy", ".hk", ".hm", ".hn", ".hr", ".ht", ".hu", ".id", ".ie", ".il", ".im", ".in", ".io", ".iq", ".ir", ".is", ".it", ".je", ".jm", ".jo", ".jp", ".ke", ".kg", ".kh", ".ki", ".km", ".kn", ".kp", ".kr", ".kw", ".ky", ".kz", ".la", ".lb", ".lc", ".li", ".lk", ".lr", ".ls", ".lt", ".lu", ".lv", ".ly", ".ma", ".mc", ".md", ".me", ".mg", ".mh", ".mk", ".ml", ".mm", ".mn", ".mo", ".mp", ".mq", ".mr", ".ms", ".mt", ".mu", ".mv", ".mw", ".mx", ".my", ".mz", ".na", ".nc", ".ne", ".nf", ".ng", ".ni", ".nl", ".no", ".np", ".nr", ".nu", ".nz", ".om", ".pa", ".pe", ".pf", ".pg", ".ph", ".pk", ".pl", ".pm", ".pn", ".pr", ".ps", ".pt", ".pw", ".py", ".qa", ".re", ".ro", ".rs", ".ru", ".rw", ".sa", ".sb", ".sc", ".sd", ".se", ".sg", ".sh", ".si", ".sk", ".sl", ".sm", ".sn", ".so", ".sr", ".ss", ".st", ".su", ".sv", ".sx", ".sy", ".sz", ".tc", ".td", ".tf", ".tg", ".th", ".tj", ".tk", ".tl", ".tm", ".tn", ".to", ".td", ".tt", ".tv", ".tw", ".tz", ".ua", ".ug", ".uk", ".us", ".uy", ".uz", ".va", ".vc", ".ve", ".vg", ".vi", ".vn", ".vu", ".wf", ".ws", ".ye", ".yt", ".za", ".zm", ".zw", ".com", ".xyz", ".microsoft", ".lol", ".top", ".org", ".net", ".int", ".edu"]
    ) {};
    register(name: string, surname: string, mail: string, group: string, checked: NodeList, rodo: HTMLInputElement, counter: HTMLSpanElement, register: JQuery<HTMLDivElement>, register_con: JQuery<HTMLDivElement>, form: HTMLFormElement): void {
        if ((name.trim() == "") || (surname.trim() == "") || (mail.trim() == "") || (mail.includes("@") == false) || (this.searchPrefix(mail, this.prefix) == false) ||(checked.length == 0) || (rodo.checked == false)) {
            //alert("Uzupełnij wszystkie pola poprawnie.")
            alerts.Alert("Przepraszamy!", "Uzupełnij wszystkie pola poprawnie.");
            return;
        }
        else {
            this.addToCounter(counter);
            //alert(`Dziękujemy za zgłoszenie, ${name} ${surname}!`);
            alerts.Alert("Dziękujemy!", `Dziękujemy za zgłoszenie, ${name} ${surname}!`);
            this.container(true, register, register_con);
            form.reset();
            localStorage.setItem("registered", "true");
            return this.saveFile(name, surname, mail, group, checked, rodo);
        }
    }
    private saveFile(name: string, surname: string, mail: string, group: string, checked: NodeList, rodo: HTMLInputElement): any {
        let checkedTracks: any[] = [];
        let checkboxArray: Array<any> = Array.from(checked);
        checkboxArray.forEach(cbox => {
            checkedTracks.push((cbox as HTMLInputElement).id);
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
        if (isNaN(registered)) {
            registered = 58;
        }
        registered++;
        localStorage.setItem("counter", registered.toString());
        people.textContent = registered.toString();
    }
    
    container(b: boolean, register: JQuery<HTMLDivElement>, reg_con: JQuery<HTMLDivElement>): void {
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
    private searchPrefix(mail: string, prefix: string[]): any {
        let checked: boolean = false;
        prefix.forEach((element: string) => {
            if (mail.includes(element)) {
                checked = true;
            }
        })
        return checked;
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