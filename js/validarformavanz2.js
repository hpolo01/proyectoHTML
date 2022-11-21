// funcion para cancelar envio de datos, recargue de formulario
function limpform(){
    window.location.reload();
}
// funcion para validar envio de datos, limpios 
function enviarform(){          
var nombre,edad, dir, contra, contra2,error,expcorreo;
var nombre = document.getElementById("nombre");
var edad = document.getElementById("Edad");
var dir = document.getElementById("Dir");
var email = document.getElementById("Email");
var check1= document.getElementById("ofer1");
var check2= document.getElementById("ofer2");
var fecha =  document.getElementById("fecha");
var horas = document.getElementById("horas");
var mensaje=  document.getElementById("mensaje");
var error = document.getElementById("error");
var errorf= 0;// linea para declarar variable de control
//linea para colocar color rojo a los mensajes de error 
error.style.color="red";
//linea para declarar variable tipo array que almacenar mensajes de error
var mensajeserror=[];
//seccion de validaciones de los inputs y muestra mensaje de error
if (nombre.value==""){
    mensajeserror.push('falta ingresar tu nombre completo !!');
    errorf=1;
    }
if (nombre.value!="") {
    nombre = document.getElementById("nombre").value; 
    
    }
 
 if (isNaN(edad.value) || edad.value ==""){
    mensajeserror.push('la edad no es un número o falta edad !!');
     errorf=1;
    }
if (!isNaN(edad.value)){
    edad = document.getElementById("Edad").value;
    
    }
if (dir.value===""){
    mensajeserror.push('falta dirección !!');
    errorf=1;
    }  
if (dir.value!=""){
  dir = document.getElementById("Dir").value;
    
    }  
    
var expcorreo = /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/;
if (!expcorreo.test(email.value)) {
    mensajeserror.push('falta correo o no es válido !!');
    errorf=1;
    }
if (expcorreo.test(email.value)) {
    email = document.getElementById("Email").value;
    }
if ( check1.checked == false && check2.checked == false){
    mensajeserror.push('completa campo ofertas !!');
    errorf=1;
    }
if ( check1.checked == true){
   check1= document.getElementById("ofer1").value;
    }
    
if ( check2.checked == true){
   check2= document.getElementById("ofer2").value;
    }
    
if (fecha.value ==""){
    mensajeserror.push('falta fecha por ingresar !!');
    errorf=1;
    }  
if ( horas.value ==""){
    mensajeserror.push('falta hora por ingresar !!');
    errorf=1;
    }  
if (mensaje.value ==""){
    mensajeserror.push('falta mensaje por ingresar !!');
    errorf=1;
    }
console.log('validando y enviando datos formulario');
//seccion para validar envio limpio de datos 
if (errorf==0) {
    alert('enviando datos de formulario...');
     window.location.reload();
}
    
error.innerHTML=mensajeserror.join(', ');
return false;
           
}