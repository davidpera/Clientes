(function($){
    $.fn.numElementos = function(){
        if (this.prop('tagName') != undefined) {
            alert("Tiene "+this.length+" "+this.prop('tagName'));
        }else {
            alert("No hay ningun elemento con esa etiqueta en el fichero")
        }
        return this;
    };

    $.fn.numElementosParr = function(){
        if (this.prop('tagName') != undefined) {
            $('body').append("<p>Tiene "+this.length+" "+this.prop('tagName')+"</p>");
        }else {
            $('body').append("<p>No hay ningun elemento con esa etiqueta en el fichero</p>")
        }

        return this;
    };

})(jQuery);
