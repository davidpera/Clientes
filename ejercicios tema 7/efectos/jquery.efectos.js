(function($){
	 
	 var methods = {
			escalar : function(opciones) { 
		  //opciones por defecto
				var conf = {
					min: 100,
					max: 800
				}

				$.extend(conf,opciones);
	
			  return this.each(function(){
					$(this).prepend("<input type='range' min='100' max='800'/><br>");
					$(this).children().first().on("change", function(){
						$(this).siblings().filter('img').width($(this).val());
					});	
				});
				
			},
			difuminar : function() {
			  return this.each(function(){
					$(this).prepend("<input type='range' min='0' max='1' step='0.1' value='0.5'/><br>");
					$(this).children().first().on("change", function(){
						$(this).siblings().filter('img').fadeTo('slow',$(this).val());
					});
				});
				
			}
	  };
	  
	  
	  $.fn.efectos = function( method ) {
			// Si existe la función la llamamos
			if ( methods[method] ) {
			  return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
			} else if ( typeof method === 'object' || ! method ) {
			  //Si no se pasa ningún parámetro o el parámetro es 
			  //un objeto de configuración llamamos al inicializador	
			  return methods.init.apply( this, arguments );
			} else {
			  //En el resto de los casos mostramos un error
				 alert('La función ' +  method + ' no existe en jQuery.efectos' );
			 }
			 
			    
	 };


 
})(jQuery);