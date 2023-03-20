
$(document).ready(function () {

    cargarSnacksCarrito();
    precioTotal();


    

  
    $(document).on('click', '#btn_Logout', function(){
        ventanaUsuarioInvitado();
    });
  
    if(localStorage.getItem("EstadoSesion")==1){
        
        ventanaUsuarioLogueado();
       
    }

});



function cargarSnacksCarrito() {

    let snacks_stack = [];
    var array = localStorage.getItem("snacksIngresados");
    array = JSON.parse(array);

    if(array.length==0){


        location.href="indexSeleSnack.html";


    }else{


    //////////
    let snack_unicos = array.filter((valor, indice) => {
        return array.indexOf(valor) === indice;
      }
    );

    localStorage.setItem("snacksIngresados",JSON.stringify(snack_unicos));

    ///////////
   if(snack_unicos.length !=0){
    for(var i in snack_unicos){
       var data=JSON.parse(snack_unicos[i]);
       snacks_stack.push([data.snack,data.stock,data.precioTotal]);
    }
        $.ajax({
            url: '../Modelo/mostraSnackCarrito.php',
            type: 'POST',
            data: { snacks_stack: snacks_stack  },
            success: function (response) {
                $('#snack_carrito').html(response);
                   }
            });
    }else{
        $('#snack_carrito').html("<br>"); 
        }
}
}


function deleteSnackCarrito(snack) {

    
    var snack_unicos = localStorage.getItem("snacksIngresados");
    snack_unicos= JSON.parse(snack_unicos);


    for(var i in snack_unicos){
        var data=JSON.parse(snack_unicos[i]);
        if(data.snack==snack){
        
        const unicos=snack_unicos.filter((item)=>item!== snack_unicos[i]);
        localStorage.setItem("snacksIngresados", JSON.stringify(unicos));
        cargarSnacksCarrito();
        precioTotal();
        }
     }

    
}


function stockSnack(contador,idSnack){

    
    var snack_unicos = localStorage.getItem("snacksIngresados");
    snack_unicos= JSON.parse(snack_unicos);


    for(var i in snack_unicos){
        
        var data=JSON.parse(snack_unicos[i]);
        if(data.snack==idSnack){
        data.precioTotal=parseFloat((data.precio * contador).toFixed(2));
        data.stock=contador;
        console.log(data);
        snack_unicos[i]=JSON.stringify(data);
        localStorage.setItem("snacksIngresados", JSON.stringify(snack_unicos));
        $('#'+idSnack+'').text(""+data.precioTotal+" $");
        precioTotal();
     }
    }
    
}


function precioTotal(){
    var snack_unicos = localStorage.getItem("snacksIngresados");
    snack_unicos= JSON.parse(snack_unicos);

    var pTotal=0;
    for(var i in snack_unicos){
        var data=JSON.parse(snack_unicos[i]);
        pTotal= parseFloat((pTotal+data.precioTotal).toFixed(3));
       $('#precioTotal').text(""+pTotal+" $");
    }
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


























