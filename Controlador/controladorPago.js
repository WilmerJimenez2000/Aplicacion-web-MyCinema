$(document).ready(function () {
    extraerPelicula();
    extraerFormato();
    extraerBoletos();
    $(document).on('click', '#btn_Logout', function(){
        ventanaUsuarioInvitado();
    });
    
    if(localStorage.getItem("EstadoSesion")==1){
        
        ventanaUsuarioLogueado();
       
    }
});

function extraerPelicula(){
    var id=localStorage.getItem('idPelicula')
    $.post('../Modelo/nombrePelicula.php',{
        idPelicula: id
    },function(datos,estado){
        $('#pelicula').html(datos);
        //alert("Informacion:"+datos);
    })
}

function extraerFormato(){
    var id=localStorage.getItem('idFuncion')
    $.post('../Modelo/verFormato.php',{
        idFuncion: id
    },function(datos,estado){
        $('#formato').html(datos);
        //alert("Informacion:"+datos);
    })
}

function extraerBoletos(){
    var precio=localStorage.getItem('precioBoletos')
    var num=localStorage.getItem('numBoletos')
    precio='$'+precio
    document.getElementById("numBoletos").innerHTML =num;
    document.getElementById("total").innerHTML = precio;
}
function ventanaUsuarioLogueado(){

    let nombreUsuario=localStorage.getItem("nombre" );
   $(".login").html("<input id='btn_nomUsu' type='submit' src='#' value='"+nombreUsuario+"'><input id='btn_Logout' type='submit'  value='Cerrar Sesión'>");
 }
 
 function ventanaUsuarioInvitado(){
 
   $(".login").html("<input id='btn_reg' type='submit'  value='REGISTRARSE'><input id='btn_ini' type='submit'  value='INICIAR SESIÓN'>");
   localStorage.setItem("EstadoSesion",0);
   location.href="../INICIO/index.html";
 }