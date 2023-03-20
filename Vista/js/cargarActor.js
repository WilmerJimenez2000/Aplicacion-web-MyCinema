/*function cargarPeliculas(){
    alert('Vivoooooo');
    $.ajax({
        type: "GET",
        url: '../Modelo/seleccionPelicula.php',
        success: function(response){
            $('#actor').html(response);
        }
   });
}*/
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: '../Modelo/mostrarActor.php',
        success: function(response){
            console.log(response);
            $('#actor').html(response);
        }
   });
});