const validaciones={
    nombre: /^([a-zA-Z0-9_-]){1,80}$/,
    Categoria: /^([a-zA-ZÀ-ÿ\s]){1,15}$/,
    Descripcion: /^([a-zA-ZÀ-ÿ\s]){1,60}$/
}
function validarFormulario() {
    var nombre = $("#nombre").val();
    if (nombre.length == 0) {
        alert('Escriba un Nombre para registrar el snack'); 
        return false;
    }
    if(!validaciones.nombre.test(nombre)){
        alert('Nombre incorrecto'); 
        return false;
    }
    var Categoria = $("#Categoria").val();
    if (Categoria.length == 0) {
        alert('Escriba una categoria para registrar el snack');
        return false;
    }
    if(!validaciones.Categoria.test(Categoria)){
        alert('Categoria incorrecta'); 
        return false;
    }
    var Precio = $('#Precio').val();
    if (Precio.length == 0) {
        alert('Escriba un precio para registrar el snack');
        return false;
    }
    var Descripcion = $("#Descripcion").val();
    if (Descripcion.length == 0) {
        alert('Escriba una Descripcion para registrar el snack');
        return false;
    } 
    if(!validaciones.Descripcion.test(Descripcion)){
        alert('Descripcion incorrecta'); 
        return false;
    }
    return true
}
export{validarFormulario} 
