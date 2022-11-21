const form= document.getElementById("form");
const usuario= document.getElementById("usuario");
const password= document.getElementById("password");
const password2= document.getElementById("password2");
form.addEventListener('submit', e =>{
e.preventDefault();
validainputs();
});
function validainputs() {
const usuarioval= usuario.value.trim();
const emailval= email.value.trim();
const passwordval= password.value.trim();
const password2val= password2.value.trim();
if (usuarioval ==="") {
    ocErrorform(usuario, "no puede usuario estar vacío");
}else{
    exitosform(usuario);
}
if (emailval ===""){
    ocErrorform(email,"no se puede dejar email en blanco");
}else if (!valEmail(emailval)){
    ocErrorform(email,"no ingreso, email no valido");
}else{
    exitosform(email);
}
if (passwordval ===""){
    ocErrorform(password,"no se puede dejar password en blanco");
}else if (!valPassword(passwordval)){
    ocErrorform(password,"no ingreso, password no valido");
}else{
    exitosform(password);
}
if (password2val ===""){
    ocErrorform(password2,"no se puede dejar password en blanco");
}else if ( passwordval!==password2val){
    ocErrorform(password2,"error contraseñas no coinciden");
}else{
    exitosform(password2);
}
}

function ocErrorform (input, message){
   const formControl=input.parentElement;
   const small=formControl.querySelector("small");
   formControl.className="form-control error";
   small.innerText =message; 
}
function exitosform (input){
    const formControl=input.parentElement;
        formControl.className="form-control success";
    }
function valEmail(email){
return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
}
function valPassword(password){
    return /^[a-z0-9_-]{6,10}$/.test(password);
}


