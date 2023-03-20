const validaciones={
  nombre:  /^([a-zA-Z0-9 _-]){1,80}$/,
  sinopsis: /^([a-zA-Z0-9 _-]){1,80}$/,
  duracion: /\dh\s[1-5]\dmin$/
}
function validarFormulario() {

    var titulo = $("#titulo").val();
    if(titulo.length == 0) {
      alert('Escriba un Titulo para la nueva pelicula');
      return false;
    }
    if(!validaciones.nombre.test(titulo)) {
      alert('Nombre incorrecto');
      return false;
    }
    var sinopsis = $("#sinopsis").val();
    if (sinopsis.length == 0) {
      alert('Escriba una sinopsis para la nueva pelicula');
      return false;
    }
    if (!validaciones.sinopsis.test(sinopsis)) {
      alert('Sinopsis incorrecta');
      return false;
    }
    var director = $('#director').val();
    if (director.length == 0) {
      alert('Escriba un director para la pelicula');
      return false;
    }
    if (!validaciones.nombre.test(director)) {
      alert('Nombre de director incorrecta');
      return false;
    }
    var duracion = $('#duracion').val();
    //expresion regular
    var expreg = /\dh\s[1-5]\dmin$/;
    if (duracion.length == 0 || !expreg.exec(duracion)){
      alert('Escriba una duracion valida ej. 2h 30min');
      return false;
    }

    var clasificacion = $('#clasificacion').val();
    if(clasificacion.selectedIndex==0){
        alert('Seleccione una clasificacion');
        return false;
    }

    var idioma = $('#idioma').val();
    if(idioma.selectedIndex==0){
        alert('Seleccione un idioma');
        return false;
    }
    var genero = $('#genero').val();
    if(genero.selectedIndex==0){
        alert('Seleccione un genero');
        return false;
    }
    var estado = $('#estado').val();
    if(estado.selectedIndex==0){
        alert('Seleccione un estado');
        return false;
    }

    return true
  }
  export{validarFormulario}
