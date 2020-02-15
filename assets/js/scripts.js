
/*
* Скрываем прелоудер после полной загрузки страницы, используя метод jQuery fadeOut для анимации.
* Также запускаем анимационные процессы на главной странице
*/
$(window).load(function() {
    setTimeout(function() {
        $('.preloader').fadeOut('slow');
        $('.header .hexal-animation').addClass("hexal-animation-svg");
        $('.header .head-image .title-animation h1').addClass("animation");
        $('.header .head-image .subtitle-animation').addClass("animation");
    }, 1000);
});

$(document).ready(function(){

    /*
    * При клике на иконку аудио запускаем аудио проигрователь со звуком 50% и заменяем иконку на обратную.
    * Тоже самое делаем для остановки звука
    */
    $(".audio-icon").click(function() {
        var audio = document.querySelector("audio");
        audio.volume = 0.5;
        audio.paused ? audio.play() : audio.pause();
        $(this).find(".fa-volume-mute").toggle();
        $(this).find(".fa-volume-up").toggle();
    });

    /*
    * При прокрутке страницы ниже 500px отображаем иконку внизу страницы со ссылкой на верх страницы.
    * Скрываем иконку при обратном процессе
    */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $(".go-up-icon").show();
        } else {
            $(".go-up-icon").hide();
        }
    });

    /*
    * При клике на иконку "Наверх" проскроливаем страницу до верха, используя анимацию jQuery
    */
    $(".go-up-icon").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    /*
    * Подключаем библиотеку "prettyPhoto" к ссылкам с атрибутом 'rel' со значением начинающимся с 'prettyPhoto'
    */
    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools:''});

    /*
    * При submit формы отправляем данные на сервер методом POST.
    * В случае успеха показываем пользователю сообщение "message" пришедшее с сервера в JSON объекте.
    * Если отправка формы завершилась с ошибкой, сообщаем пользователю об этом
    */
    $('[name="get_in_touch"]').submit(function() {
        var data = $(this).serialize();
        var url = "http://example.com/api";
        //console.log(data);
        $.ajax({
            url: url,
            type: "POST", 
            dataType: "JSON",
            data: data,
            "crossDomain": true,
            success: function(response) {
                result = $.parseJSON(response);
                alert(result.message);
            },
            error: function(response) {
                alert('Ошибка. Данные не отправлены.');
            }
         });

        return false;
    });
});