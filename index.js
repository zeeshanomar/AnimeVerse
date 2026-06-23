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
let anime = [
    "Bleach",
    "Jujutsu Kaisen",
    "Naruto",
    "One Punch Man",
    "Dragon Ball Z",
    "Attack on Titan",
    "Death Note",
    "Hunter x Hunter",
    "JoJo's Bizarre Adventure",
    "Gintama",
    "Berserk",
    "Vinland Saga",
    "Dr. Stone",
    "Haikyuu!!",
    "Kuroko's Basketball",
    "Spy x Family",
    "Chainsaw Man",
    "Mob Psycho 100",
    "Blue Lock",
    "Frieren: Beyond Journey's End",
    "One Piece",
    "Demon Slayer",
    "Fullmetal Alchemist: Brotherhood",
    "Steins;Gate",
    "Code Geass",
    "Tokyo Ghoul",
    "Black Clover",
    "Fairy Tail",
    "Re:Zero",
    "The Promised Neverland",
    "Erased",
    "Parasyte: The Maxim",
    "Monster",
    "Psycho-Pass",
    "Akame ga Kill!",
    "Your Lie in April",
    "Toradora!",
    "Horimiya",
    "My Hero Academia",
    "Classroom of the Elite",
    "Overlord",
    "No Game No Life",
    "Mushoku Tensei: Jobless Reincarnation",
    "That Time I Got Reincarnated as a Slime",
    "The Rising of the Shield Hero",
    "Sword Art Online",
    "Fire Force",
    "Soul Eater",
    "Blue Exorcist",
    "Noragami",
    "Assassination Classroom",
    "The Seven Deadly Sins",
    "Cowboy Bebop",
    "Samurai Champloo",
    "Trigun",
    "Hellsing Ultimate",
    "Fate/Zero",
    "Fate/stay night: Unlimited Blade Works",
    "Fate/stay night: Heaven's Feel",
    "Violet Evergarden",
    "86 Eighty-Six",
    "Bocchi the Rock!",
    "Kaguya-sama: Love is War",
    "The Quintessential Quintuplets",
    "Rascal Does Not Dream of Bunny Girl Senpai",
    "The Dangers in My Heart",
    "A Silent Voice",
    "Your Name",
    "Weathering With You",
    "Suzume",
    "Made in Abyss",
    "Magi: The Labyrinth of Magic",
    "The Eminence in Shadow",
    "Oshi no Ko",
    "Summer Time Rendering",
    "Hell's Paradise",
    "Mashle: Magic and Muscles",
    "Kaiju No. 8",
    "Solo Leveling",
    "Wind Breaker",
    "Shangri-La Frontier",
    "Zom 100: Bucket List of the Dead",
    "Undead Unluck",
    "The Apothecary Diaries",
    "Tokyo Revengers",
    "Bungo Stray Dogs",
    "Great Teacher Onizuka",
    "Black Lagoon",
    "Durarara!!",
    "The Future Diary",
    "Another",
    "Elfen Lied",
    "Clannad",
    "Clannad: After Story",
    "Angel Beats!",
    "Neon Genesis Evangelion",
    "Gurren Lagann",
    "Kill la Kill",
    "Cyberpunk: Edgerunners",
    "Ranking of Kings"
];
console.log("1");
function getanime() {
    return (Math.floor(Math.random() * anime.length));
}
console.log("2");

let rec = document.getElementsByClassName("rec")[0];
let recbtn = document.getElementsByClassName("recbtn")[0];
console.log("3");

recbtn.addEventListener("click", () => {
    console.log("4");

    rec.textContent = anime[getanime()];
});



let fav = document.querySelectorAll(".fav");
let card = document.querySelectorAll(".cards");
let favarr = JSON.parse(localStorage.getItem("favv")) || [];
fav.forEach((fav, index) => {
    console.log("5");
    fav.addEventListener("click", () => {
        console.log("6");
        card[index].style.border = "3px solid gold";
        fav.textContent = "Favourite Selected";
        favarr.push(document.getElementsByClassName("anime_name")[index].textContent);
        localStorage.setItem("favv", JSON.stringify(favarr));
        let naam = JSON.parse(localStorage.getItem("favv"));
        console.log(naam);
    })
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

