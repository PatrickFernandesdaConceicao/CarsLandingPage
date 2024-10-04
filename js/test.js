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
async function requisitarDadosDaApi(){
    const resposta = await fetch("https://www.omdbapi.com/?i=tt0317219&plot=full&apikey=20950641", {
        method: "GET"
    })

    /*const obj = await resposta.json();
    //document.body.textContent = obj.slip.Poster;
    let img = document.createElement("img");
    img.setAttribute("src", obj.Poster);
    document.body.append(img);
    
    /*
    const p = document.createElement("p");
    p.textContent = obj.Awards;
    
    */ 
}

requisitarDadosDaApi();

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
