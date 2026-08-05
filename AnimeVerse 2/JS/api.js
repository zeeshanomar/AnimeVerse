async function getAnime(api) {
    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Top Anime Data", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch Top anime", error.message);
        throw error;
    }

}



function renderCards(animedata,container) {
    const animecard = document.querySelector(container);
    animecard.replaceChildren();
    animedata.data.forEach((anime) => {
        const card = `
        <div class="anime-card">
                        <div class="card-image">
                            <img src="${anime.images.webp.image_url}" alt="animeimage">
                        </div>
                        <div class="all-info">
                            <div class="card-info">
                                <h5 class="card-title">${anime.title_english || anime.title}</h5>
                            </div>
                            <div class="info-second-line">
                                <div class="rating-box">

                                    <p class="rating-star">⭐ </p>
                                    <p class="rating">${anime.score}</p>
                                </div>
                                <div class="year-box">

                                    <p class="calender">📅 </p>
                                    <p class="rating">${anime.broadcast.day||anime.status}</p>
                                </div>
                                <div class="fav-btn-box"><button class="fav-btn">🤍</button></div>
                            </div>
                        </div>
        </div>
                    `
    animecard.innerHTML+=card;

    });
}

document.querySelectorAll(".anime-card-wrapper, .popular-anime-wrapper")
.forEach(wrapper => {
    wrapper.addEventListener("wheel", (e) => {
        e.preventDefault();

        wrapper.scrollBy({
            left: e.deltaY,
            behavior: "smooth"
        });
    }, { passive: false });
});

const weekly_api="https://api.jikan.moe/v4/top/anime?filter=airing";
const weekly_container=".anime-card-wrapper";

const popular_api="https://api.jikan.moe/v4/top/anime?filter=bypopularity";
const popular_container=".popular-anime-wrapper";

async function datafetch() {
    const weeklydata= await getAnime(weekly_api);
    renderCards(weeklydata,weekly_container);

    const populardata= await getAnime(popular_api);
    renderCards(populardata,popular_container);
}
datafetch();










