let textarea = document.getElementsByClassName("textarea")[0];

textarea.addEventListener("input", (e) => {

    console.log(e.target.value.length);
    let num = e.target.value.length;
    document.getElementById("counter").textContent = num + " characters";
});

let emailInput = document.querySelector('input[type="email"]');
let submit = document.getElementsByClassName("submits")[0];
let names = document.getElementsByClassName("names")[0];
let pass = document.getElementsByClassName("pass")[0];
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let num = 0;
    num = names.value.trim();

    if (num.length == 0) {
        alert("Enter name");
        return;
    }

    let passnum = 0;
    passnum = pass.value.trim();
    if (passnum.length == 0) {
        alert("Enter Password");
        return;
    }
    else if (passnum.length < 8) {
        alert("Password should be atleast 8 characters");
        return;
    }

    let feedbackLength = textarea.value.trim().length;

    if (feedbackLength === 0) {
        alert("Enter Feedback");
        return;
    }

    if (feedbackLength < 20) {
        alert("Feedback should be at least 20 characters long");
        return;
    }
    if (!emailInput.checkValidity()) {
        alert("Please enter a valid email address");
        return;
    }
    console.log("Prevented from Refreshing");
    alert("Form submitted successfully");
    

});



