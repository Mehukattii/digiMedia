$(document).ready(function(){
   
    $("#anav").on('click', function(event) {
  
      
      if (this.hash !== "") {
      
        event.preventDefault();
  
    
        let hash = this.hash;
  
        
        $('html, body').animate({
          scrollLeft: $(hash).offset().left
        }, 60, function(){
         
          window.location.hash = hash;
        });
      } 
    });
  });

  $(document).ready(function()
  {
      $("#atoni").on('click', function(event)
      {
          event.stopPropagation();
          $('#ailkka').removeClass('active');
          $(this).addClass("active");
          console.log(this);
        
      })
      $("#ailkka").on('click', function(event)
      {
          event.stopPropagation();
          $('#atoni').removeClass('active');
          $(this).addClass("active");
          console.log(this);
      })
  });