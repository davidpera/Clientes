(function($){
    $.fn.mostrar = function(op){

        var def = {
            nFotos: 3
        }

        $.extend(def, op);

        $(this).on('click',function(e){
            e.preventDefault();
            var elem = $(this).prev();
            elem.addClass('is-showing-photofy');
            elem.find("li:gt("+(def.nFotos-1)+")").hide();
        });
    };

    $.fn.mostrarTodo = function(){
        $(this).on('click',function(e){
            e.preventDefault();
            $('ul ul').addClass('is-showing-photofy');
        });
    };

    $.fn.ocultar = function(){
        $(this).on('click',function(e){
            e.preventDefault();
            var elem = $(this).closest('.tour');
            elem.hide();
        });
    };

})(jQuery);
