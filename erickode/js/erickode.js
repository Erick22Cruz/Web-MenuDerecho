jQuery(document).ready(function ($) {
    $("body").niceScroll({cursorcolor: "#8d8c8c"});

    var overlay = $(".overlay");
    var toggleButtomMenu = $("#toggleButtomMenu");
    var menu = $(".menuRight");

    //Hacer cambio de iconos dependiendo si el menu esta show o hide
    toggleButtomMenu.on("click", function () {
        if (toggleButtomMenu.hasClass("fa-close")) {
            menuRight.Hide();
        } else {
            menuRight.Show();
        }
    });

    overlay.on("click", function () {
        menuRight.Hide();
    });

    var timeAnimation = 200;//velocidad de la animacion Show/Hide, expresado en milisegundos
    var menuRight = {
        Hide: function () {
            menu.animate({
                right: -150
            }, timeAnimation);
            toggleButtomMenu.animate({
                right: 0
            }, timeAnimation);
            toggleButtomMenu.removeClass("fa-close");
            toggleButtomMenu.addClass("fa-reorder");
            menuRight.PageOverlayHide();
        },
        Show: function () {
            menu.animate({
                right: 0
            }, timeAnimation);
            toggleButtomMenu.animate({
                right: 150
            }, timeAnimation);
            toggleButtomMenu.addClass("fa-close");
            toggleButtomMenu.removeClass("fa-reorder");
            menuRight.PageOverlayShow();
        },
        PageOverlayShow: function () {
            overlay.fadeIn(timeAnimation);
        },
        PageOverlayHide: function () {
            overlay.fadeOut(timeAnimation);
        }
    };
});