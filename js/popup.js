$(document).ready(() => {
    $('.portfolio-item').on('click',(e) => {
        e.stopPropagation();
        createPopup(e.currentTarget);
    });
});

function createPopup(item) {
    console.log(item);
}