$(function () {
    VANTA.RINGS({
            el: "#header",
            mouseControls: true,
            touchControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0,
            color: 0xff00c3
        }),

        $('.statistics-slider').slick({
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: 3000,
        });
});