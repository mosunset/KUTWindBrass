var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(function () {
    $(".icon-hover").popover({
        trigger: "hover", // click,hover,focus,manualを選択出来る
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    imgload();
});

function imgload() {
    var intervaltime = 3500;
    for (var i = 0; i < 10; i++) { // 0～9までの10枚
        if (i == 0) { // 最初の選択画像また必ず1枚は画像があるものとする
            $('.carousel-indicators').append(`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" title="1"></button>`);
            $('.carousel-inner').append(`<div class="carousel-item active" data-bs-interval="${intervaltime}"><img src="./img/homeslide/0.jpg" class="d-block w-100" alt="slide写真 0"></div>`);
        } else {
            loadImage(`./img/homeslide/${i}.jpg`).then(res => {
                var x = Number(res.src.substr(-5).substr(0, 1));
                $('.carousel-indicators').append(`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${x}" aria-label="Slide ${x + 1}" title="${x + 1}"></button>`);
                $('.carousel-inner').append(`<div class="carousel-item" data-bs-interval="${intervaltime}"><img src="${res.src}" class="d-block w-100" alt="slide写真 ${x}"></div>`);
            });
        }
    }
}

function loadImage(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = src;
    });
}

