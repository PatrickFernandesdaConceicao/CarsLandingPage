/*
const minhaPromise = new Promise(function(deuCerto,deuErrado){
    deuErrado();

})

minhaPromise
    .then(function(resposta){
        console.log("Deu boa", resposta)
    })
    .catch(function(erro){
        console.log("Deu BO", erro)
    })
*/

/*melhor forma de fazer é com AWAIT e ASINC*/ 
/*
async function requisitarDadosDaApi(){
    const resposta = await fetch("https://www.omdbapi.com/?i=tt0317219&plot=full&apikey=20950641", {
        method: "GET"
    })

    const obj = await resposta.json();

    const posterDiv = document.querySelector("#img-home-div");

    const pHome = document.createElement("p");
    pHome.textContent = "2006 - 1H56MIN";
    
    const posterImg = document.createElement("img");
    posterImg.setAttribute("src", obj.Poster)

    //document.body.append(p,img);
    posterDiv.append(posterImg,pHome);

 
    /*home details*/
    /*
    const homeDetailsDiv = document.querySelector(".home-details")

    const metascore = document.querySelector("#metascore");
    metascore.textContent = obj.Metascore;
    const imdbRating = document.querySelector("#imdbRating");
    imdbRating.textContent = obj.imdbRating;
    const rottenTomatoes = document.querySelector("#rottenTomatoesRating")
    const rottenTomatoesRating = obj.Ratings.find(rating => rating.Source === "Rotten Tomatoes");
    rottenTomatoes.textContent = rottenTomatoesRating.Value;


}

requisitarDadosDaApi();

    /*
    const obj = await resposta.json();
    //document.body.textContent = obj.slip.Poster;
    let img = document.createElement("img");
    img.setAttribute("src", obj.Poster);
    

    let p = document.createElement("p");
    p.textContent = obj.Plot;


    
    const p = document.createElement("p");
    p.textContent = obj.Awards;
    
    */ 

/*

const minhaPromise = fetch("https://api.adviceslip.com/advice", {
    method: "GET"
})

minhaPromise
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        document.body.textContent = json.slip.advice;
    })
    .catch(function(erro){
        console.log("Deu BO", erro)
    })
*/