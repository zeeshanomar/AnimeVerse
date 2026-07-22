

console.log("Initializing......")

let btn = document.getElementsByClassName("animemode")[0];
let heading = document.getElementsByClassName("heading")[0];


window.addEventListener("load", () => {
    let themename = localStorage.getItem("theme");
    if (themename == "light") {
        document.body.style.backgroundColor = "cyan";
        toggle.textContent = "Dark Mode";
        mode = false;
    }
    else if (themename == "dark") {
        document.body.style.backgroundColor = "black";
        toggle.textContent = "Light Mode";
        mode = true;

    }
    let favarr = JSON.parse(localStorage.getItem("favv")) || [];
    let animenames = document.getElementsByClassName("anime_name");

    for (let i = 0; i < animenames.length; i++) {
        for (let j = 0; j < favarr.length; j++) {
            if (animenames[i].textContent == favarr[j]) {
                card[i].style.border = "3px solid gold";
                fav[i].textContent = "Favourite Selected";
            }
        }

    }

});
btn.addEventListener("click", () => {
    btn.textContent = "ACTIVATED !!";
    heading.style.textShadow = "0px 0px 80px cyan";
    heading.style.color = "cyan";
    btn.style.backgroundColor = "cyan";
    btn.style.color = "black";

});

console.log("For button 2");
let changed = true;
let btn2 = document.getElementsByClassName("animemodes")[0];
let para = document.getElementsByClassName("firstp")[0];
btn2.addEventListener("click", () => {
    if (changed) {

        btn2.textContent = "HIDE INTRODUCTION";
        para.textContent = "Welcome to AnimeVerse, your ultimate destination for anime discovery. Explore legendary classics, trending series, and unforgettable characters from every genre. Whether you're a longtime fan or just beginning your journey, AnimeVerse is here to help you find your next favorite anime."
    }
    else {
        btn2.textContent = "SHOW INTRODUCTION";
        para.textContent = "";

    }
    changed = !changed;

});
console.log("btn 3")

console.log("1");



function getanime() {
    return (Math.floor(Math.random() * animelist.length));
}
console.log(getanime());

let rec = document.getElementsByClassName("rec")[0];
let recbtn = document.getElementsByClassName("recbtn")[0];
console.log("3");

recbtn.addEventListener("click", () => {
    console.log("4");

    rec.textContent = animelist[getanime()].name;
});



let toggle = document.getElementsByClassName("toggle")[0];

let mode = true;
toggle.addEventListener("click", () => {
    if (mode) {
        document.body.style.backgroundColor = "cyan";
        toggle.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
    else {
        document.body.style.backgroundColor = "black";
        toggle.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");

    }

    mode = !mode;
});




let searchbar = document.body.getElementsByClassName("searchbar")[0];

searchbar.addEventListener("input", (event) => {
    let inp = event.target.value.toLowerCase();
    let homecard = document.getElementsByClassName("homecard")[0];
    homecard.innerHTML = "";


    const filtered = animelist.filter((anime) => {
        return anime.name.toLowerCase().includes(inp);
    })

    let favarr = JSON.parse(localStorage.getItem("favv")) || [];
    filtered.forEach((anime) => {
        let section = document.createElement("section");
        section.classList.add("cards");

        const image = document.createElement("img");
        image.src = "./assests/images/aot.jpg";

        let div = document.createElement("div");
        div.classList.add("content");

        let title = document.createElement("h3");
        title.textContent = anime.name;

        let info = document.createElement("p");
        info.textContent = anime.desc;

        const btn = document.createElement("button");
        btn.classList.add("fav");
        btn.textContent = "Pick favourite";
        btn.dataset.name = anime.name;

        if (favarr.includes(anime.name)) {

            section.style.border = "3px solid gold";

            btn.textContent = "Favourite Selected";

        } else {

            btn.textContent = "Pick Favourite";

        }


        btn.addEventListener("click", () => {

            if (!favarr.includes(anime.name)) {

                favarr.push(anime.name);

                localStorage.setItem(
                    "favv",
                    JSON.stringify(favarr)
                );

                section.style.border = "3px solid gold";
                btn.textContent = "Favourite Selected";

                console.log(favarr);

            }

        });

        section.appendChild(image);
        section.appendChild(div);
        div.appendChild(title);
        div.appendChild(info);
        div.appendChild(btn);

        homecard.appendChild(section);
    });
})