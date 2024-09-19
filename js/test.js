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

    const obj = await resposta.json();
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