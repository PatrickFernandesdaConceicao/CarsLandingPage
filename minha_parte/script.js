document.addEventListener("DOMContentLoaded", function() {
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


    document.body.appendChild(wrapper);
});
