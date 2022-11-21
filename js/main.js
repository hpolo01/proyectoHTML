document.addEventListener('DOMContentLoaded', function () => {
    const elems = document.querySelectorAll('.carousel');
        
 M.Carousel.init(elems, {
        duration:150;
         numVisible:3; 
         indicators:true;
    });
            
  