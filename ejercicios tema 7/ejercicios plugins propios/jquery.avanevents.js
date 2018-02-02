(function($){

    $.fn.mostrar = function(){
        $(this).one('click', 'input',mostrarFoto);
        $(this).on('click', 'input',mostrarTiempo);
        $(this).children('input').trigger('click');
        return  $(this);
    }
    function mostrarFoto(){
        //$(this).on('mostrar.tiempo',mostrarTiempo);
        //$(this).trigger('mostrar.tiempo');
        var elem = $(this).closest('.tour');
        var img = '<img src=photos/'+elem.data('loc')+'.jpg width=200px heigth=200px />';
        elem.children('.results').append(img);
    }

    function mostrarTiempo(){
        var elem = $(this).closest('.tour');
        var par = '<p>Weather: '+elem.data('temp')+'</p>';
        elem.children('.results').append(par);
    }
})(jQuery);
