function validarFormulario() {
    var capacidad = $("#Capacidad").val();
    if (capacidad.length === 0) {
        alert('Escriba una capacidad para la Sala');
        return false;
    }
    var soporte = $("#Soporte").val();
    if (soporte.length === 0) {
        alert('Escoja un soporte para la Sala');
        return false;
    }
    var horaInicio = $('#horaInicio').val();
    if (horaInicio.length === 0) {
        alert('Escriba una hora de Inicio');
        return false;
    }
    var horaFin = $('#horaFin').val();
    if (horaFin.length === 0) {
        alert('Escriba una hora de Fin');
        return false;
    }
    if(horaInicio>=horaFin){
        alert('La hora de inicio es mayor o igual a la hora de fin');
        return false
    }
    var estado= $('#Estado').val();
    if (estado.length === 0) {
        alert('Escoja un estado para la sala');
        return false;
    }
    return true
}
export{validarFormulario}
