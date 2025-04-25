var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
$(function () {
    $(".icon-hover").popover({
        trigger: "hover", // click,hover,focus,manualを選択出来る
    });
});

window.addEventListener('load', function () {
    childcount()
})

function childcount() {
    var s = []
    $('.accordion-body').each(function (index, element) {
        s.push(element.childElementCount)
    });

    $('.childnum').each(
        function (index, element) {
            element.innerText = s[index] + "回"
        }
    )
}