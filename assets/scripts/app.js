window.addEventListener('scroll', function () {
    let offSetShape = window.scrollY * 0.15
    console.log(offSetShape)
    if (offSetShape <= 40) {
        document.getElementById("shape1").style.transform = `translateY(${offSetShape}px)`
        document.getElementById("shape2").style.transform = `translateY(${offSetShape}px)`
        document.getElementById("shape3").style.transform = `translateY(${offSetShape}px)`
        document.getElementById("shape4").style.transform = `translateY(${offSetShape}px)`
        document.getElementById("shape5").style.transform = `translateY(${offSetShape}px)`
        document.getElementById("shape6").style.transform = `translateY(${offSetShape}px)`
    }
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }

})
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('#button--next').click(function () {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('#button--back').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
})