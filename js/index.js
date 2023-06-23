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
    var req = new XMLHttpRequest();
    req.open("get", "./img/homeslide/images-number.csv", true);
    req.send(null);
    req.onload = function () {

        var intervaltime = 3500;
        for (var i = 0; i < req.responseText; i++) {
            if (i == 0) {
                $('.carousel-indicators').append(`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" title="1"></button>`);
                $('.carousel-inner').append(`<div class="carousel-item active" data-bs-interval="${intervaltime}"><img src="./img/homeslide/0.jpg" onerror="this.src='./img/no-img.jpg'" class="d-block w-100" alt="slide写真0"></div>`);
            } else {
                $('.carousel-indicators').append(`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i + 1}" title="${i + 1}"></button>`);
                $('.carousel-inner').append(`<div class="carousel-item" data-bs-interval="${intervaltime}"><img src="./img/homeslide/${i}.jpg" onerror="this.src='./img/no-img.jpg'" class="d-block w-100" alt="slide写真${i}"></div>`);
            }
        }
    }
}
