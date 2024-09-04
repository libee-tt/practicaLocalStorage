const btnGuardar = document.getElementById("btnGuardar");
const txtNombre = document.getElementById("name");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");





// Botón acciones
btnGuardar.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.style.border = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    // Validación nombre
    if (txtNombre.value.length < 3) {
        txtNombre.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML = "El <strong> Nombre </strong> no es correcto. <br>";
        alertValidaciones.style.display = "block";
    } //cierre if lenght

    else{
        //JSON
        localStorage.setItem("nombre", txtNombre.value);
        
        // limpiar después de agregar
        txtNombre.value="";
        txtNombre.focus();
        // redirección con el botón
        window.location.href="./welcomeL.html";
    }; //cierre de else
}); //Cierre btnGuardar

btnLimpiar.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.value="";
    localStorage.removeItem("nombre");
    // Ocultar alerta
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    // Quitar bordes alerta 
    txtNombre.style.border="none";

});//cierre btnLimpiar