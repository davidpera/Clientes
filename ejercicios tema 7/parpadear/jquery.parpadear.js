jQuery.fn.parpadea = function() {
   
   $(this).each(function(){
      
      	$(this).fadeOut(250, function(){$(this).fadeIn(250);});
   });
   
   return this;
};
