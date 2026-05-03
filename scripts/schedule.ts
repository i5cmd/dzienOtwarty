const filter: HTMLSelectElement = document.getElementById("filter") as HTMLSelectElement;
const rows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll("tr") as NodeListOf<HTMLTableRowElement>;

class FilterSchedule {
    filterTable(value: string) {
        let val = value;
        if (val == "Nic nie filtrowane") {
            this.showAll();
        }
        else if (val == "Informatyka") {
            this.hideAll();
            this.filter('informatyka');
        }
        else if (val == "Programowanie") {
            this.hideAll();
            this.filter('programowanie');
        }
        else if (val == "Logistyka") {
            this.hideAll();
            this.filter('logistyka');
        }
        else if (val == "Elektryka") {
            this.hideAll();
            this.filter('elektryka');
        }
        else if (val == "Elektronika") {
            this.hideAll();
            this.filter('elektronika');
        }
        else if (val == "Eksploatacja portów i terminali") {
            this.hideAll();
            this.filter('porty');
        }
            
    }
    hideAll(): void {
        rows.forEach(row => {
                row.style.display = 'none';
        });
    }
    showAll(): void {
        rows.forEach(row => {
            row.style.display = 'table-row';
        });
    }
    private filter(category: string): void {
        let irows = document.querySelectorAll(`tr[data-category='${category}']`) as NodeListOf<HTMLTableRowElement>;
        irows.forEach(row => {
            row.style.display = 'table-row';
        });
    }
}

const filterSchedule: FilterSchedule = new FilterSchedule();
filter.addEventListener("change", () => filterSchedule.filterTable(filter.value));

