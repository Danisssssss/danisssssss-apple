$(function() {


    $('.nav_toggle_item').on("click", function(event) {
        event.preventDefault();
        $('.nav_toggle_item').toggleClass('show');
    });


    $('.nav_toggle').on("click", function(event) {
        event.preventDefault();
        $('.header_nav').toggleClass('show');
    });


    $('.nav_toggle').on("click", function(event) {
        event.preventDefault();
        $('.header').toggleClass('black');
    });

    /*cCOLLAPSE*/
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("collapse");

        $(blockId).slideToggle();
    });

});
