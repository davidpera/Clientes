
(function($) {

   $.fn.tipOpPublicas = function(textoTip, opciones) {
     
      var opts = $.extend({}, $.fn.tipOpPublicas.defaults, opciones);
            
      this.each(function(){
         elem = $(this);
         var miTip = $('<div class="' + opts.claseTip + '">' + textoTip + '</div>');
         $(document.body).append(miTip);
        
         
         elem.mouseenter(function(e){
         
            miTip.css({
                  left: e.pageX + 10,
                  top: e.pageY + 5   
               });
               miTip.animate(opts.animacionMuestra, opts.velocidad);
         });
         
         elem.mouseleave(function(e){
          
            miTip.animate(opts.animacionOculta, opts.velocidad);
         });
      });
      
      return this;
   };

   $.fn.tipOpPublicas.defaults = {
         velocidad: 500,
         animacionMuestra: {width: "show"},
         animacionOculta: {opacity: "hide"},
         claseTip: "tip"
   };



})(jQuery);