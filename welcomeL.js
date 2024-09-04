// Página de Welcome

// mostrar mensaje
let nombre = localStorage.getItem("nombre");
const mensaje = document.getElementById("mensaje");

// si hay nombre guardado
if (nombre){
    mensaje.innerHTML = `Welcome <strong>${nombre}</strong>, si estas viendo esto es porque sí me salió el código <br>
    <img src="https://res.cloudinary.com/postedin/image/upload/d_mascotas:no-image.jpg,f_auto,q_80/mascotas/c-postedin-image-50106.jpeg" alt="">
    `;
} else{
    mensaje.innerHTML = `Por favor, ve al index y pon tu nombre`;
}