const expresiones = {
    nombre: /^[a-zA-Z ,.'-]+$/,
    nacionalidad: /^[a-z]{1,20}$/
}
function validarFormulario() {
    var nombre = $("#nombre").val();
    if (nombre.length === 0) {
        alert('Escriba un nombre para el Actor');
        return false;
    }
    if (!expresiones.nombre.test(nombre)) {
        alert('Nombre incorrecto');
        return false;
    }
    var nacionalidad = $("#nacionalidad").val();
    if (nacionalidad.length === 0) {
        alert('Escriba una nacionalidad para el Actor');
        return false;
    }
    if (!expresiones.nacionalidad.test(nacionalidad)) {
        alert('Nacionalidad incorrecta');
        return false;
    }
    var edad = $('#edad').val();
    if (edad.length === 0) {
        alert('Escriba un edad para el Actor');
        return false;
    }
    
    return true
}
export{validarFormulario}
