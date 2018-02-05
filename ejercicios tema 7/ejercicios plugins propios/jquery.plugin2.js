(function($){
    $.fn.mostrar = function(op){

        var def = {
            nFotos: 3
        }

        $.extend(def, op);

        $(this).on('click','.see-photos',function(e){
            e.preventDefault();
            var elem = $(this).parent().find('ul');
            elem.addClass('is-showing-photofy');
            elem.find("li:gt("+(def.nFotos-1)+")").hide();
        });
    };

    $.fn.mostrarTodo = function(){
        $(this).on('click',function(e){
            e.preventDefault();
            // $('.see-photos').trigger('click');
            $(this).parent().find('ul ul').addClass('is-showing-photofy');
        });
    };

    $.fn.ocultar = function(){
        $(this).on('click','.hide-tour',function(e){
            e.preventDefault();
            var elem = $(this).closest('.tour');
            elem.hide();
        });
    };

})(jQuery);
