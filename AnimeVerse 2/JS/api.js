async function getTopAnime() {
    try {
        const response= await fetch("https://api.jikan.moe/v4/top/anime");
        if(!response.ok)
        {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data=await response.json();
        console.log("Top Anime Data",data);
        return data;       
    } catch (error) {
        console.error("Failed to fetch Top anime",error.message);
        throw error;
    }
    
}


getTopAnime();