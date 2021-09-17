$(document).ready(function(){
   
    $("a").on('click', function(event) {
  
      
      if (this.hash !== "") {
      
        event.preventDefault();
  
    
        let hash = this.hash;
  
        
        $('html, body').animate({
          scrollLeft: $(hash).offset().left
        }, 800, function(){
         
          window.location.hash = hash;
        });
      } 
    });
  });

  
  $(document).ready(function()
{
    $("#navi").mouseenter(function(event)
    {
        event.stopPropagation()
        $(this).addClass("show");
        $(this).animate({opacity: '1'}, 800);
    }).mouseleave(function(event)
    {
        event.stopPropagation()
        $(this).animate({opacity: '0'}, 800);
        //$(this).removeClass("show");
    })
});