let textarea = document.getElementsByClassName("textarea")[0];

textarea.addEventListener("input", (e) => {

    console.log(e.target.value.length);
    let num=e.target.value.length;
    document.getElementById("counter").textContent= num + " characters";
})