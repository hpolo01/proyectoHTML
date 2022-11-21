function validainputs() {
const usuario= document.getElementById("usuario");
const email= document.getElementById("email");
const password= document.getElementById("password");
const password2= document.getElementById("password2");
//linea para asignar el id del boton enviar a una variable.
const enviar=document.getElementById("enviar");
//  
const usuarioval= usuario.value.trim();
const emailval= email.value.trim();
const passwordval= password.value.trim();
const password2val= password2.value.trim();
//cambio **   se declara una variable de control de errores
var errorf= 0;
if (usuarioval ==="") {
    ocErrorform(usuario, "no puede usuario estar vacío");
  errorf=1;
    
}else{
    exitosform(usuario);
}
if (emailval ===""){
    ocErrorform(email,"no se puede dejar email en blanco");
    errorf=1;
}else if (!valEmail(emailval)){
    ocErrorform(email,"no ingreso, email no valido");
    errorf=1;
}else{
    exitosform(email);
}
if (passwordval ===""){
    ocErrorform(password,"no se puede dejar password en blanco");
    errorf=1;

}else if (!valPassword(passwordval)){
    ocErrorform(password,"no ingreso, password no valido");
    errorf=1;
}else{
    exitosform(password);
}

if (password2val ===""){
    ocErrorform(password2,"no se puede dejar password en blanco");
    errorf=1;
}else if ( passwordval!==password2val){
    ocErrorform(password2,"error contraseñas no coinciden");
    errorf=1;
}else{
    exitosform(password2);
}
//seccion para verificar si no hay errores para enviar los datos 
if (errorf==0) {
    enviar.addEventListener('click', function(){
    alert('enviando datos de formulario...');
    window.location.reload(); })
}
return false;
}
//
function ocErrorform (input, message){
   const formControl=input.parentElement;
   const small=formControl.querySelector("small");
   formControl.className="form-control error";
   small.innerText =message; 
  //
}
function exitosform (input){
    const formControl=input.parentElement;
    formControl.className="form-control success";
    //    
}
function valEmail(email){
        return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
        }
function valPassword(password){
            return /^[a-z0-9_-]{6,10}$/.test(password);
    }



