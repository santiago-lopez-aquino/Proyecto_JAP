//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function guardarCambios() {
    let perfil = {};
    perfil.primerNombre = document.getElementById("Name1").value;
    perfil.segundoNombre = document.getElementById("Name2").value;
    perfil.primerApellido = document.getElementById("Name3").value;
    perfil.segundoApellido = document.getElementById("Name4").value;
    perfil.email = document.getElementById("Email").value;
    perfil.edad = document.getElementById("Age").value;
    perfil.telefono = document.getElementById("Phone").value;
    console.log(perfil);
    localStorage.setItem("perfil", JSON.stringify(perfil));
}

document.addEventListener("DOMContentLoaded", function(e) {
    if (localStorage.getItem("perfil") != undefined) {
        let cambios = JSON.parse(localStorage.getItem("perfil"));

        document.getElementById("Name1").value = cambios.primerNombre;
        document.getElementById("Name2").value = cambios.segundoNombre;
        document.getElementById("Name3").value = cambios.primerApellido;
        document.getElementById("Name4").value = cambios.segundoApellido;
        document.getElementById("Email").value = cambios.email;
        document.getElementById("Age").value = cambios.edad;
        document.getElementById("Phone").value = cambios.telefono;

    }

});