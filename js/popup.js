$(document).ready(() => {
    $('.portfolio-item').on('click',(e) => {
        e.stopPropagation();
        createPopup(e.currentTarget);
    });
});

function createPopup(item) {
    console.log(item);
}

function createPopup(item) {
    console.log(item);
    const clicked = $(item);
    const src = clicked.data('src');
    const container = $('<div>', {'class': 'popup-container'});
    const img = $('<img>', {'class':'popup', 'src': src});
    container.append(img);
    $('body').append(container);
    setTimeout(() => {
        container.addClass('ready');
    });

    img.on('click', () => {
        container.removeClass('ready');
        setTimeout(() => {
            container.remove();
        }, 250);
    });
}
