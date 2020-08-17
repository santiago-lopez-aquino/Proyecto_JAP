//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.getElementById("button").addEventListener("click", function(e) {
    e.preventDefault();

    if (document.getElementById("username").value.length != 0 &&
        document.getElementById("password").value.length != 0) {
        return location.href = "index.html";
    } else {
        if (document.getElementById("username").value.length == 0) {
            document.getElementById("username").style.borderColor = 'red';
            document.getElementById("formulario").innerHTML = 'Usuario y/o contraseña inválido.' + '<br>' + '<br>';
            document.getElementById("formulario").style.color = 'red';
        } else {
            document.getElementById("username").style.removeProperty('border-color');
            document.getElementById("formulario").style.removeProperty('color');
        }

        if (document.getElementById("password").value.length == 0) {
            document.getElementById("password").style.borderColor = 'red';
            document.getElementById("formulario").innerHTML = 'Usuario y/o contraseña inválido.' + '<br>' + '<br>';
            document.getElementById("formulario").style.color = 'red';

        } else {
            document.getElementById("password").style.removeProperty('border-color');
            document.getElementById("formulario").style.removeProperty('color');

        }
    }
});