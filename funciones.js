function validar(){
var nombre, mail, asunto, comentario, enviarc
nombre = document.getElementById ("nombre").value;
mail = document.getElementById ("mail").value;
asunto = document.getElementById ("asunto").value;
comentario = document.getElementById ("comentario").value;
enviarc = document.getElementById ("enviarc").value;

if (nombre = "" || mail = "" || asunto = "" || comentario ="" || enviarc ="" || ){
    alert("todos los campos son obligatorios");
    return false;
}

}