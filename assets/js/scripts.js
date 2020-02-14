$(window).load(function() {
    setTimeout(function() {
        $('.preloader').fadeOut('slow');
        $('.header .hexal-animation').addClass("hexal-animation-svg");
        $('.header .head-image .title-animation h1').addClass("animation");
        $('.header .head-image .subtitle-animation').addClass("animation");
    }, 1000); 
});

$(document).ready(function(){
    $(".audio-icon").click(function() {
        var audio = document.querySelector("audio");
        audio.volume = 0.5;
        audio.paused ? audio.play() : audio.pause();
        $(this).find(".fa-volume-mute").toggle();
        $(this).find(".fa-volume-up").toggle();
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $(".go-up-icon").show();
        } else {
            $(".go-up-icon").hide();
        }
    });

    $(".go-up-icon").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools:''});
});