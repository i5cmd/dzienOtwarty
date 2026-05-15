/// <reference types="jquery" />
// const filter: HTMLSelectElement = document.getElementById("filter") as HTMLSelectElement;
// const rows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll("tr") as NodeListOf<HTMLTableRowElement>;

export class FilterSchedule {
    filterTable(value: string, row: JQuery<HTMLTableRowElement>) {
        let val = value;
        if (val == "Nic nie filtrowane") {
            this.showAll(row);
        }
        else if (val == "Informatyka") {
            this.hideAll(row);
            this.filter('informatyka');
        }
        else if (val == "Programowanie") {
            this.hideAll(row);
            this.filter('programowanie');
        }
        else if (val == "Logistyka") {
            this.hideAll(row);
            this.filter('logistyka');
        }
        else if (val == "Elektryka") {
            this.hideAll(row);
            this.filter('elektryka');
        }
        else if (val == "Elektronika") {
            this.hideAll(row);
            this.filter('elektronika');
        }
        else if (val == "Eksploatacja portów i terminali") {
            this.hideAll(row);
            this.filter('porty');
        }
            
    }
    private hideAll(row: JQuery<HTMLTableRowElement>): void {
        /* rows.forEach(row => {
                row.style.display = 'none';
        }); */
        row.css("display", "none");
    }
    private showAll(row: JQuery<HTMLTableRowElement>): void {
        /* rows.forEach(row => {
            row.style.display = 'table-row';
        }); */
        row.css("display", "table-row");
    }
    private filter(category: string): void {
        /* let irows = document.querySelectorAll(`tr[data-category='${category}']`) as NodeListOf<HTMLTableRowElement>;
        irows.forEach(row => {
            row.style.display = 'table-row';
        }); */
        const irows: JQuery<HTMLTableRowElement> = $(`tr[data-category='${category}']`);
        irows.css("display", "table-row");
        const irows2: JQuery<HTMLTableRowElement> = $(`tr[data-category='no-sort']`);
        irows2.css("display", "table-row");
    }
    /* checkRow(row: HTMLTableRowElement) {
        if (row.hasAttribute("data-checked")) {
            row.style.outline = `none`;
            row.removeAttribute("data-checked")
        }
        else {
            row.style.outline = `5px var(--blue-border) solid`;
            row.setAttribute("data-checked", "on");
        }
    } */
    checkRow(row: JQuery<HTMLTableRowElement>) {
        if (row.attr("data-checked")) {
            row.css("outline", "0");
            row.removeAttr("data-checked");
        }
        else {
            if (row.attr("data-category") == "no-sort") {
                return
            }
            else {
                row.css("outline", "3px var(--blue-border) solid");
                row.attr("data-checked", "on");
            }
        }
    } 
}

const filterSchedule: FilterSchedule = new FilterSchedule();

