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
let avatarContainer = document.getElementById("avatar-container");
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

avatarContainer.appendChild(avatar);

/*Eduardo*/
const wrapper = document.createElement('div');
    wrapper.id = 'rhapper';

    function createTitulo(text) {
        const Titulo = document.createElement('div');
        Titulo.id = 'fotos-titulo';
        Titulo.textContent = text;
        return Titulo;
    }


    function createTrailer() {
        const trailerDiv = document.createElement('div');
        trailerDiv.classList.add('treiler');

        const iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/W_H7_tDHFE8";
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');

        trailerDiv.appendChild(iframe);
        return trailerDiv;
    }

    function createImageColuna(imageSources) {
        const imageColuna = document.createElement('div');
        imageColuna.classList.add('image-coluna');

        imageSources.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            imageColuna.appendChild(img);
        });

        return imageColuna;
    }

    function createMairImagem(src) {
        const img = document.createElement('img');
        img.id = 'Maior-foto';
        img.src = src;
        return img;
    }

    function createAbaixoImages(imageSources) {
        const AbaixoDiv = document.createElement('div');
        AbaixoDiv.id = 'abaixo';

        imageSources.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            AbaixoDiv.appendChild(img);
        });

        return AbaixoDiv;
    }

    wrapper.appendChild(createTitulo('TRAILER'));
    wrapper.appendChild(createTrailer());

    wrapper.appendChild(createTitulo('FOTOS'));

    const imageWrapper = document.createElement('div');
    imageWrapper.id = 'image-wrapper';

    const colunaEsquerda = createImageColuna([
        'img_carros/1.jpg',
        'img_carros/2.jpg',
        'img_carros/3.jpg'
    ]);

    const colunaDireita = createImageColuna([
        'img_carros/CARS Clip - _Lightning McQueen Helps The King_ (2006).jpg',
        'img_carros/download (1).jpg',
        'img_carros/download (2).jpg'
    ]);

    imageWrapper.appendChild(colunaEsquerda);
    imageWrapper.appendChild(colunaDireita);
    wrapper.appendChild(imageWrapper);

    wrapper.appendChild(createMairImagem('img_carros/image 21.png'));

    wrapper.appendChild(createAbaixoImages([
        'img_carros/image 22.png',
        'img_carros/image 23.png'
    ]));


/*Joás*/
const conteudo = document.getElementById('conteudo');

    const linha1 = document.createElement('div');
    linha1.classList.add('linha');
    linha1.innerHTML = `<div class="texto-centralizado">
                            Foi o primeiro filme da Pixar a usar a técnica chamada "ray tracing", que imita as características
                             dos raios de luz conforme eles interagem com objetos, materiais e cores. Isso faz coisas como 
                             fornecer reflexos mais realistas e adicionar um brilho mais realista a materiais transparentes, 
                             como acabamentos de carros.
                        </div>`;
    conteudo.appendChild(linha1);

    const linha2 = document.createElement('div');
    linha2.classList.add('linha');
    linha2.innerHTML = `<div class="imagem-texto">
                            <img src="img/mate.png" alt="Carro">
                        </div>
                        <div class="texto">
                            Com 1 hora e 57 minutos, este foi o filme mais longo da Pixar até que Os Incríveis 2 (2018) o
                             superou em 1 minuto. Sem os créditos, Os Incríveis 2 tem 1 hora e 49 minutos, enquanto Carros tem 1 hora 52 minutos.
                        </div>`;
    conteudo.appendChild(linha2);

    const linha3 = document.createElement('div');
    linha3.classList.add('linha');
    linha3.innerHTML = `<div class="texto">
                            Os animadores do filme elaboraram mais de 43.000 esboços para os designs dos carros.
                        </div>
                        <div class="imagem-texto">
                            <img src="img/xerife.png" alt="Carro">
                        </div>`;
    conteudo.appendChild(linha3);

    const linha4 = document.createElement('div');
    linha4.classList.add('linha');
    linha4.innerHTML = `<div class="linha-duplo-texto">
                            Mesmo com um conjunto de computadores que rodavam quatro vezes mais rápido que os usados ​​em Os
                             Incríveis (2004) e 1.000 vezes mais rápido que os usados ​​em Toy Story (1995) , cada quadro deste 
                             filme levou em média 17 horas de processador para ser renderizado.
                        </div>
                        <div class="linha-duplo-texto">
                            Toda vez que Bessie, a máquina de pavimentação, cospe nos carros que a puxam (duas vezes no filme, 
                            uma durante os créditos finais), ela emite sons de risadas, indicando que ela pode possuir alguma 
                            inteligência limitada, apesar de não ter olhos visíveis.
                        </div>`;
    conteudo.appendChild(linha4);

    const linha5 = document.createElement('div');
    linha5.classList.add('linha');
    linha5.innerHTML = `<div class="texto-centralizado">
                            Foi o primeiro filme a ganhar o Globo de Ouro de Melhor Filme de Animação.
                        </div>`;
    conteudo.appendChild(linha5);

    const linha6 = document.createElement('div');
    linha6.classList.add('linha', 'linha-imagem-centro');
    linha6.innerHTML = `<img class="imagem-centro" src="img/doc.png" alt="Carro 1">
                        <div class="texto-centralizado2">
                            O personagem Doc Hudson é baseado no pioneiro da NASCAR da vida real, Herb Thomas, que levou o Hudson Hornets aos
                             campeonatos Grand National em 1951 e 1953. Ele foi derrotado pelo título em 1954 por Lee Petty , pai de Richard 
                             Petty ("The King"). Acidentes em 1955 e 1956 efetivamente acabaram com a carreira de Thomas.
                        </div>
                        <img class="imagem-centro" src="img/sally.png" alt="Carro 2">`;
    conteudo.appendChild(linha6);

    const linha7 = document.createElement('div');
    linha7.classList.add('linha');
    linha7.innerHTML = `<div class="texto-centralizado">
                            A cena da multidão no confronto final da Piston Cup apresenta 105.000 carros animados separadamente, incluindo 13.000
                             carros entrando apenas no estádio.
                        </div>`;
    conteudo.appendChild(linha7);

    const linha8 = document.createElement('div');
    linha8.classList.add('linha');
    linha8.innerHTML = `<div class="quatro-textos">Este filme gerou US$ 8 bilhões em vendas de produtos nos cinco anos seguintes ao seu lançamento.</div>
                        <div class="quatro-textos">Michael Jordan foi a inspiração humana para Relâmpago McQueen.</div>
                        <div class="quatro-textos">O último filme produzido pela Pixar antes da Disney comprar oficialmente a empresa.</div>
                        <div class="quatro-textos">Quando o filme foi lançado em DVD, cinco milhões de cópias foram vendidas em dois dias.</div>`;
    conteudo.appendChild(linha8);
