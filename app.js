
let date = new Date()
let yearChanger = document.querySelector("#yearChanger");
yearChanger.innerText = date.getFullYear()

function ageCalculate(){
    let currentYear = 2024
    let year = +prompt("Enter your date of birth");
    let userAge = currentYear - year;
    Swal.fire(`Your age is ${userAge}.`);
}