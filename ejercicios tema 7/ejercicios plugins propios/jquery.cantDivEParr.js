(function($){
    $.cantidadAuto = function(){
        $('body').append("Tiene "+$('div').length+" div<br/>"+"Tiene "+$('a').length+" enlaces<br/>"
        +"Tiene "+$('p').length+" parrafos<br/>");
        return this;
    };

    $.cantidadDecide = function(op){
        var def = {
            elem: 'div'
        }

        $.extend(def, op);
        if ($(def.elem).prop('tagName') != undefined) {
            $('body').append("Tiene "+$(def.elem).length+" "+$(def.elem).prop('tagName'));
        }else {
            $('body').append("No hay ningun elemento con esa etiqueta en el fichero")
        }

        return this;
    };
})(jQuery);
