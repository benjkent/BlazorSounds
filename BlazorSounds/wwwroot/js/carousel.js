window.initializeCarousel = () => {
    $('#carouselExampleIndicators').carousel({ interval: 4000 });

    //see step 2 to understand these news id's:
    $('#carouselExampleIndicators-prev').click(
        () => $('#carouselExampleIndicators').carousel('prev'));
    $('#carouselExampleIndicators-next').click(
        () => $('#carouselExampleIndicators').carousel('next'));

}