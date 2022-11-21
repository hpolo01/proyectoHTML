
function carri() {
    var modal = document.getElementById("win-modal");
    var btn = document.getElementById("button-add");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];
    var total=document.getElementById("carrov2").innerHTML;
    var sw= document.getElementById("sw").innerHTML;
    var carventas=[];
    if (sw==0) {   
        carventas[0]=2299000;
        var total= carventas[0];
        document.getElementById("carrov").innerHTML=total;
        var sw=1;
        document.getElementById("sw").innerHTML=sw;
    }
    else{
        var total=document.getElementById("carrov2").innerHTML;
        carventas[0]=2299000;
        var total= parseFloat(total)+carventas[0];
        document.getElementById("carrov").innerHTML=total;
        var sw=1;
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
//_________________________________________________________________________
 function carro() {
    var modal = document.getElementById("win-modalo");
    var btn = document.getElementById("button-addo");
    var span = document.getElementsByClassName("close")[1];
    var body = document.getElementsByTagName("body")[0];
    var total=document.getElementById("carrov").innerHTML;
    var sw= document.getElementById("sw").innerHTML;
    var carventas=[];
    if (sw==1){
    var total2=0;
    carventas[1]=2199000;
    var total2= parseFloat(total)+carventas[1];
    document.getElementById("carrov2").innerHTML=total2;
    var sw=1;
    }else{
        carventas[1]=2199000;
        var total= carventas[1];
        document.getElementById("carrov2").innerHTML=total;
        var sw=1;
        document.getElementById("sw").innerHTML=sw;

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
 function cerrarv(){
    document.getElementById("win-modalo").style.display="none";
    }

//_______________________________________________________________________
function carro3() {
    var modal = document.getElementById("win-modal3");
    var btn = document.getElementById("button-addo3");
    var span = document.getElementsByClassName("close")[1];
    var body = document.getElementsByTagName("body")[0];
    var total=document.getElementById("carrov").innerHTML;
    var total2=document.getElementById("carrov2").innerHTML;
    var sw= document.getElementById("sw").innerHTML;
    var carventas=[];
    if (sw==1){
    
    carventas[2]=2799000;
    var total= parseFloat(total)+parseFloat(total2)+carventas[2];
    document.getElementById("carrov3").innerHTML=total2;
    var sw=1;
    }else{
        var total=0;
        carventas[2]=2799000;
        var total= carventas[2];
        document.getElementById("carrov3").innerHTML=total;
        var sw=1;
        document.getElementById("sw").innerHTML=sw;

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