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
    
    const homeDetailsDiv = document.querySelector(".home-details")

    const metascore = document.querySelector("#metascore");
    metascore.textContent = obj.Metascore;
    const imdbRating = document.querySelector("#imdbRating");
    const imdb = obj.Ratings.find(rating => rating.Source === "Internet Movie Database");
    imdbRating.textContent = imdb.Value;
    const rottenTomatoes = document.querySelector("#rottenTomatoesRating")
    const rottenTomatoesRating = obj.Ratings.find(rating => rating.Source === "Rotten Tomatoes");
    rottenTomatoes.textContent = rottenTomatoesRating.Value;

    /*Home text*/
    
    const plotDiv = document.querySelector("#plot");
    plotDiv.textContent = obj.Plot; 
}

requisitarDadosDaApi();

/*Gabriel Bonfim*/
let avatar = document.createElement("div");
avatar.setAttribute("class", "avatar");

let avatarConteudo = [
    { texto: "Marcio Garcia é a voz de McQueen", imgSrc: "img/imagem1.png" },
    { texto: "Garcia Júnior é a voz de Luigi", imgSrc: "img/imagem2.png" },
    { texto: "Mario Jorge é a voz de Mate", imgSrc: "img/imagem3.png" },
    { texto: "Carla Pompílio é a voz de Flor", imgSrc: "img/imagem4.png" },
    { texto: "Pricilla Fantin é a voz de Sally", imgSrc: "img/imagem5.png" },
    { texto: "Luis Carlos Persy é a voz de Sargento", imgSrc: "img/imagem6.png" },
    { texto: "Manolo Rey é a voz de Ramon", imgSrc: "img/imagem7.png" },
    { texto: "Jomeri Pozzoli é a voz de Xerife", imgSrc: "img/imagem8.png" },
    { texto: "Renato Rosenberg é a voz de Mack", imgSrc: "img/imagem9.png" },
    { texto: "Daniel Filho é a voz de Doc Hudson", imgSrc: "img/imagem10.png" }
];

avatarConteudo.forEach(Conteudo => {
    let avatarItem = document.createElement("div");
    avatarItem.setAttribute("class", "avatar-item");

    let avatarImg = document.createElement("img");
    avatarImg.setAttribute("class", "avatar-img");
    avatarImg.setAttribute("src", Conteudo.imgSrc);

    let avatarTxt = document.createElement("span");
    avatarTxt.setAttribute("class", "avatar-txt");
    avatarTxt.textContent = Conteudo.texto; 

    avatarItem.appendChild(avatarImg);
    avatarItem.appendChild(avatarTxt);

    avatar.appendChild(avatarItem);
});

document.body.appendChild(avatar);