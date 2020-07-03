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
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: 3000,
            infinite: true,
            dots: true,
            asNavFor: '.images-slider'
        });
    $('.images-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.statistics-slider',
        arrows: false
    });

    //smooth scroll
    $(document).ready(function () {
        $("a").on("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();

                let hash = this.hash;
                $("html, body").animate({
                        scrollTop: $(hash).offset().top,
                    },
                    800,
                    function () {
                        window.location.hash = hash;
                    }
                );
            }
        });
    });
});