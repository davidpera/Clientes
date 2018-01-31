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
            $('body').append("Tiene "+this.length+" "+this.prop('tagName'));
        }else {
            $('body').append("No hay ningun elemento con esa etiqueta en el fichero")
        }

        return this;
    };

})(jQuery);
