var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(function () {
    $(".icon-hover").popover({
        trigger: "hover", // click,hover,focus,manualを選択出来る
    });
});

