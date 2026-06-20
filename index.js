console.log("Initializing......")

let btn = document.getElementsByClassName("animemode")[0];
let heading = document.getElementsByClassName("heading")[0];

btn.addEventListener("click", () => {
    btn.textContent = "ACTIVATED !!";
    heading.style.textShadow = "0px 0px 80px cyan";
    heading.style.color = "cyan";
    btn.style.backgroundColor = "cyan";
    btn.style.color="black";

});

console.log("For button 2");
let changed = false;
let btn2=document.getElementsByClassName("animemodes")[0];
let para= document.getElementsByClassName("firstp")[0];
btn2.addEventListener("click",()=>{
    if(changed)
    {

            btn2.textContent="HIDE INTRODUCTION";
            para.textContent="Welcome to AnimeVerse, your ultimate destination for anime discovery. Explore legendary classics, trending series, and unforgettable characters from every genre. Whether you're a longtime fan or just beginning your journey, AnimeVerse is here to help you find your next favorite anime."
    }
    else{
            btn2.textContent="SHOW INTRODUCTION";
            para.textContent="";

    }
    changed=!changed;

});