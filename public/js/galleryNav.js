const imagesData = {
    personal: [{
            src: './img/car1.png',
            alt: 'Osobowe 1'
        },
        {
            src: './img/car2.png',
            alt: 'Osobowe 2'
        },
        {
            src: './img/car3.png',
            alt: 'Osobowe 3'
        }
    ],
    delivery: [{
            src: './img/van1.jpg',
            alt: 'Dostawcze 1'
        },
        {
            src: './img/van2.webp',
            alt: 'Dostawcze 2'
        },
        {
            src: './img/van3.jpg',
            alt: 'Dostawcze 3'
        },
    ]
};

function loadImages(category) {
    const sliderWrapper = document.getElementById('image-wrapper');
    sliderWrapper.innerHTML = '';

    imagesData[category].forEach(image => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('swiper-slide');
        slideElement.innerHTML = `<img src="${image.src}" alt="${image.alt}" class="object-contain w-full">`;
        sliderWrapper.appendChild(slideElement);
    });

    swiper.update();
}

const swiper = new Swiper('.swiper-container', {
    loop: false,
    slidesPerView: 2.1,
    spaceBetween: 60,
    pagination: {
        el: '.swiper-pagination-custom',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet-custom',
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2.2,
            spaceBetween: 60,
        },
    },
});

document.getElementById('personal-link').addEventListener('click', function(e) {
    e.preventDefault();
    loadImages('personal');

    this.classList.add('text-blue-700', 'underline', 'underline-offset-4');

    document.getElementById('delivery-link').classList.remove('text-blue-700', 'underline', 'underline-offset-4');
});

document.getElementById('delivery-link').addEventListener('click', function(e) {
    e.preventDefault();
    loadImages('delivery');

    this.classList.add('text-blue-700', 'underline', 'underline-offset-4');

    document.getElementById('personal-link').classList.remove('text-blue-700', 'underline', 'underline-offset-4');
});

window.onload = function() {
    loadImages('personal');
};