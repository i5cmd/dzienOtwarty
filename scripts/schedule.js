"use strict";
const filter = document.getElementById("filter");
const rows = document.querySelectorAll("tr");
class FilterSchedule {
    filterTable(value) {
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
    hideAll() {
        rows.forEach(row => {
            row.style.display = 'none';
        });
    }
    showAll() {
        rows.forEach(row => {
            row.style.display = 'table-row';
        });
    }
    filter(category) {
        let irows = document.querySelectorAll(`tr[data-category='${category}']`);
        irows.forEach(row => {
            row.style.display = 'table-row';
        });
    }
}
const filterSchedule = new FilterSchedule();
filter.addEventListener("change", () => filterSchedule.filterTable(filter.value));
