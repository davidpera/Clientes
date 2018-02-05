(function($){

    $.fn.mostrar = function(){
        $(this).one('click', 'input',mostrarFoto);
        $(this).one('click', 'input',mostrarTiempo);
        //$(this).children('input').trigger('click');
        return  $(this);
    }
    function mostrarFoto(){
        //$(this).on('mostrar.tiempo',mostrarTiempo);
        var elem = $(this).closest('.tour');
        var img = '<img src=photos/'+elem.data('loc')+'.jpg width=200px heigth=200px />';
        elem.children('.results').append(img);
        //$(this).trigger('mostrar.tiempo');
    }

    function mostrarTiempo(){
        var elem = $(this).closest('.tour');
        var par = '<p>Weather: '+elem.data('temp')+'</p>';
        elem.children('.results').append(par);
    }
})(jQuery);
