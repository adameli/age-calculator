"use strict"

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

console.log(dd, mm, yyyy);

let day = parseInt(dd);
console.log(day);

let inputs = Array.from(document.querySelectorAll(".input_field"));
console.log(inputs);
let values = [];

inputs.forEach(input => {
    let data = {
        kind: input.placeholder,
        value: parseInt(input.value),
    }

    values.push(data);
})

console.log(values);

