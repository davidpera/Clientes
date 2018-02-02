(function($){

    $.fn.tiempo = function(){
        $(this).one('click.tiempo', 'input', function(){
            var elem = $(this).closest('.tour');
            var par = '<p>Weather: '+elem.data('temp')+'</p>';
            elem.children('.results').append(par);
        });
        return $(this);
    }

    $.fn.foto = function(){
        $(this).one('click.foto', 'input', function(){
            var elem = $(this).closest('.tour');
            var img = '<img src=photos/'+elem.data('loc')+'.jpg width=200px heigth=200px />';
            elem.children('.results').append(img);
        });
        return $(this);
    }

    $.fn.mostrar() = function(){

    }
    function mostrarFoto(){
        var elem = $(this).closest('.tour');
        var par = '<p>Weather: '+elem.data('temp')+'</p>';
        elem.children('.results').append(par);
    }
})(jQuery);
