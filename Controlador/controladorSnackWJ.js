
$(document).ready(function () {
    cargarSnacks();

   
  $(document).on('click', '#btn_Logout', function(){
    ventanaUsuarioInvitado();
});

if(localStorage.getItem("EstadoSesion")==1){
    
    ventanaUsuarioLogueado();
   
}
    
});

function cargarSnacks() {
    $.ajax({
        type: "GET",
        url: '../Modelo/mostrarSnackWJ.php',
        success: function (response) {
            $('#snack_precio').html(response);
        }
    });
}




function addSnackCarrito(snack,precio) {


    var objetos=localStorage.getItem("snacksIngresados");
    var objetos_totales=JSON.parse(objetos);
    console.log("id de snak seleccionado");
    console.log(snack);
    console.log("todos los snack si en alterior por el momento");
    let aux=0;
    for(var i in objetos_totales){

        var data=JSON.parse(objetos_totales[i]);
       
       if(data.snack==snack){
        aux+=1;
       }
    }     
      
    if(aux==0){
        
        let mi_objeto={snack:snack, stock:1,precio:precio,precioTotal:precio};
        objetos_totales.push(JSON.stringify(mi_objeto));
        localStorage.setItem("snacksIngresados", JSON.stringify(objetos_totales));
    }
   
     
}

function mouseOver(snack){

    $('#'+snack+'').show();

}

function mouseOut(snack){

    $('#'+snack+'').hide();
    

}



/////////////////////
function ventanaUsuarioLogueado(){

    let nombreUsuario=localStorage.getItem("nombre" );
   $(".login").html("<input id='btn_nomUsu' type='submit' src='#' value='"+nombreUsuario+"'><input id='btn_Logout' type='submit'  value='Cerrar Sesión'>");
 }
 
 function ventanaUsuarioInvitado(){
 
   $(".login").html("<input id='btn_reg' type='submit'  value='REGISTRARSE'><input id='btn_ini' type='submit'  value='INICIAR SESIÓN'>");
   localStorage.setItem("EstadoSesion",0);
   location.href="../INICIO/index.html";
 }















