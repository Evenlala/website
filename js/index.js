
var Index = {
    loadIndex:function () {
        $("#carousel_1").FtCarousel();

        $("#carousel_2").FtCarousel({
            index: 1,
            auto: false
        });

        $("#carousel_3").FtCarousel({
            index: 0,
            auto: true,
            time: 3000,
            indicators: false,
            buttons: true
        });
        var exampleHeight = $(".carousel-inner .carousel-item :eq(1)").height()+'px';
        console.log(exampleHeight,'exampleHeight')
        $(".example").css('height',exampleHeight)



        // $(window).resize(function(){
        //
        //     window.location.reload();
        //
        // });

    }
}