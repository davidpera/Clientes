(function($){
    $.fn.menus = function(op){

        var opt = $.extend({}, $.fn.menus.defaults, op);

        $(this).children().children().children().css({'display':'none'});
        $(this).find('div').css({'background-color':opt.fondo,'color':opt.letra,'width':opt.width,'text-align':opt.alineacion});

        $(this).children('div').hover(function() {
            $(this).children().css({'backgroundColor':opt.letra,'color':opt.fondo});
            $(this).children().children().slideDown(opt.velocidad);
        }, function() {
            $(this).children().css({'background-color':opt.fondo,'color':opt.letra});
            $(this).children().children().slideUp(opt.velocidad);
        });
    };

    $.fn.menus.defaults = {
        velocidad: 500,
        width: '200px',
        fondo: 'blue',
        letra: 'white',
        alineacion: 'center',
    }

})(jQuery);
