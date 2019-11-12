jQuery(document).ready(function ($) {
    $('.loop').owlCarousel({
        stagePadding: 50,
        center: true,
        // items: 2,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
});

function table() {
    document.querySelector('.table_popup').classList.add('open');
};
