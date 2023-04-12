"use strict"

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

let results = Array.from(document.querySelectorAll(".result_field"));
console.log(results);


document.querySelector("#button").addEventListener("click", () => {
    let inputs = Array.from(document.querySelectorAll(".input_field"));
    let values = [];

    inputs.forEach(input => {
        let data = {
            kind: input.placeholder,
            value: parseInt(input.value),
        }

        values.push(data);
    })

    let ageInYears = yyyy - values[2].value;
    let ageInMonths = mm - values[1].value;
    let ageInDays = dd - values[0].value;

    if (ageInMonths < 0 || (ageInMonths === 0 && ageInDays < 0)) {
        ageInYears--;
        ageInMonths += 12;
        if (ageInDays < 0) {
            ageInDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
    }

    results[0].textContent = ageInYears;
    results[1].textContent = ageInMonths;
    results[2].textContent = ageInDays;
    console.log(ageInYears, ageInMonths, ageInDays);

});
