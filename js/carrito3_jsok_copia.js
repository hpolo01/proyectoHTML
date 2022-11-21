     // Get the elements with class="column"
     var elements = document.getElementsByClassName("column");
        
     // Declare a loop variable
     var i;
     
     // List View
     function listView() {
       for (i = 0; i < elements.length; i++) {
         elements[i].style.width = "100%";
       }
     }
     
     // Grid View
     function gridView() {
       for (i = 0; i < elements.length; i++) {
         elements[i].style.width = "50%";
       }
     }
     
     /* Optional: Add active class to the current button (highlight it) */
     var container = document.getElementById("btnContainer");
     var btns = container.getElementsByClassName("btn");
     for (var i = 0; i < btns.length; i++) {
       btns[i].addEventListener("click", function() {
         var current = document.getElementsByClassName("active");
         current[0].className = current[0].className.replace(" active", "");
         this.className += " active";
       });
     }
//__1er PRODUCTO___________________________________________________________________
function carri() {
    var modal = document.getElementById("win-modal");
    var btn = document.getElementById("button-add");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];
    var total2=document.getElementById("carrov2").innerHTML;
    var total3=document.getElementById("carrov3").innerHTML;
    var total4=document.getElementById("carrov4").innerHTML;
    var sw2= document.getElementById("sw2").innerHTML;
    var sw3= document.getElementById("sw3").innerHTML;
    var sw4= document.getElementById("sw4").innerHTML;//para tener cuenta
    var carventas=[];
    sw1=0;
    var total=0;
    if (sw2==1){
        
        carventas[0]=2299000;
        var total= parseFloat(total2)+carventas[0];
        document.getElementById("carrov").innerHTML=total;
        var sw1=1;
        document.getElementById("sw1").innerHTML=sw1;
         
    }
    if (sw3==1){
        
        carventas[0]=2299000;
        var total= parseFloat(total3)+carventas[0];
        document.getElementById("carrov").innerHTML=total;
        var sw1=1;  
        document.getElementById("sw1").innerHTML=sw1;
        }
    if (sw4==1){
        
        carventas[0]=2299000;
        var total= parseFloat(total4)+carventas[0];
        document.getElementById("carrov").innerHTML=total;
        var sw1=1;  
        document.getElementById("sw1").innerHTML=sw1;
        }
    if (sw1==0) {   
        
        carventas[0]=2299000;
        var total= carventas[0];
        document.getElementById("carrov").innerHTML=total;
        var sw1=1;
        document.getElementById("sw1").innerHTML=sw1;
       
    }
        btn.onclick = function(){
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

        span.onclick = function(){
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
       }
}
function cerrar(){
    document.getElementById("win-modal").style.display="none";
    }
//___2do PRODUCTO______________________________________________________________________
 function carro() {
    var modal = document.getElementById("win-modalo");
    var btn = document.getElementById("button-addo");
    var span = document.getElementsByClassName("close")[1];
    var body = document.getElementsByTagName("body")[0];
    var total=document.getElementById("carrov").innerHTML;
    var total3=document.getElementById("carrov3").innerHTML;
    var total4=document.getElementById("carrov4").innerHTML;
    var sw1= document.getElementById("sw1").innerHTML;
    var sw3= document.getElementById("sw3").innerHTML;
    var sw4= document.getElementById("sw4").innerHTML;
    var carventas=[];
    sw2=0;
    var total2=0;
    if (sw1==1){
        
        carventas[1]=2199000;
        var total2= parseFloat(total)+carventas[1];
        document.getElementById("carrov2").innerHTML=total2;
        var sw2=1;  
        document.getElementById("sw2").innerHTML=sw2;
    }
    if (sw3==1){
      
        carventas[1]=2199000;
        var total2= parseFloat(total3)+carventas[1];
        document.getElementById("carrov2").innerHTML=total2;
        var sw2=1; 
        document.getElementById("sw2").innerHTML=sw2;
    }
    if (sw4==1){
       
        carventas[1]=2199000;
        var total2= parseFloat(total4)+carventas[1];
        document.getElementById("carrov2").innerHTML=total2;
        var sw2=1;  
        document.getElementById("sw2").innerHTML=sw2;
        }
    if (sw2==0){
        
        carventas[1]=2199000;
        var total2= carventas[1];
        document.getElementById("carrov2").innerHTML=total2;
        var sw2=1;
        document.getElementById("sw2").innerHTML=sw2;
        
    } 
    
    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
 }
 function cerrarv2(){
    document.getElementById("win-modalo").style.display="none";
    }

//___3er PRODUCTO_________________________________________________________________
function carro3() {
    var modal = document.getElementById("win-modal3");
    var btn = document.getElementById("button-addo3");
    var span = document.getElementsByClassName("close")[2];
    var body = document.getElementsByTagName("body")[0];
    var total=document.getElementById("carrov").innerHTML;
    var total2=document.getElementById("carrov2").innerHTML;
    var total4=document.getElementById("carrov4").innerHTML;
    var sw1= document.getElementById("sw1").innerHTML;
    var sw2= document.getElementById("sw2").innerHTML;
    var sw4= document.getElementById("sw4").innerHTML;//para tener 
    sw3=0;
    var total3=0;
    var carventas=[];
    if (sw1==1){
        
        carventas[2]=2799000;
        var total3= parseFloat(total)+carventas[2];
        document.getElementById("carrov3").innerHTML=total3;
        var sw3=1;
        document.getElementById("sw3").innerHTML=sw3;
        } 
     if (sw2==1){
            
            carventas[2]=2799000;
            var total3= parseFloat(total2)+carventas[2];
            document.getElementById("carrov3").innerHTML=total3;
            var sw3=1;  
            document.getElementById("sw3").innerHTML=sw3;
        }
     if (sw4==1){
            
            carventas[2]=2799000;
            var total3= parseFloat(total4)+carventas[2];
            document.getElementById("carrov3").innerHTML=total3;
            var sw3=1;  
            document.getElementById("sw3").innerHTML=sw3;
            }
    if (sw3==0){
        
        carventas[2]=2799000;
        var total3= carventas[2];
        document.getElementById("carrov3").innerHTML=total3;
        var sw3=1; 
        document.getElementById("sw3").innerHTML=sw3;      
    }
    
    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
 }
 function cerrarv3(){
    document.getElementById("win-modal3").style.display="none";
    //
    }
//___4to PRODUCTO_________________________________________________________________
function carro4() {
    var modal = document.getElementById("win-modal4");
    var btn = document.getElementById("button-addo4");
    var span = document.getElementsByClassName("close")[3];
    var body = document.getElementsByTagName("body")[0];
    var total=document.getElementById("carrov").innerHTML;
    var total2=document.getElementById("carrov2").innerHTML;
    var total3=document.getElementById("carrov3").innerHTML;
    var sw1= document.getElementById("sw1").innerHTML;
    var sw2= document.getElementById("sw2").innerHTML;
    var sw3= document.getElementById("sw3").innerHTML;
    sw4=0;
    var total4=0;
    var carventas=[];
    if (sw1==1){
        
        carventas[3]=3799000;
        var total4= parseFloat(total)+carventas[3];
        document.getElementById("carrov4").innerHTML=total4;
        var sw4=1;
        document.getElementById("sw4").innerHTML=sw4;
     } 
     if (sw2==1){
            
            carventas[3]=3799000;
            var total4= parseFloat(total2)+carventas[3];
            document.getElementById("carrov4").innerHTML=total4;
            var sw4=1;  
            document.getElementById("sw4").innerHTML=sw4;
        }
        if (sw3==1){
            
            carventas[3]=3799000;
            var total4= parseFloat(total3)+carventas[3];
            document.getElementById("carrov4").innerHTML=total4;
            var sw4=1;  
            document.getElementById("sw4").innerHTML=sw4;
        }
      if (sw4==0){
        
        carventas[3]=3799000;
        var total4= carventas[3];
        document.getElementById("carrov4").innerHTML=total4;
        var sw4=1; 
        document.getElementById("sw4").innerHTML=sw4;      
    }
    
    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
  }
 function cerrarv4(){
    document.getElementById("win-modal4").style.display="none";
    //
    }