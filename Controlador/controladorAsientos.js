$(document).ready(function() {
    //Crear array de Asientos


    
    $(document).on('click', '#btn_Logout', function(){
        ventanaUsuarioInvitado();
    });
  
    if(localStorage.getItem("EstadoSesion")==1){
        
        ventanaUsuarioLogueado();
       
    }


    
    
    let asientosSeleccionados = [];
    localStorage.setItem("asientosSelecionados", JSON.stringify(asientosSeleccionados));
    var parametros = {
        "id" : localStorage.getItem("idFuncion")
    }
    $.ajax({
        type: "POST",
        method: "POST",
        url: '../Modelo/mostrarPeliculaBoleto.php',
        data: parametros,
        success: function(response){
            $('#pelicula').html(response);
            ActualizarPrecio();
        }
   });
   //Sergio
   verificarAsientosnoDisponibles();


   //Sergio

});

function ActualizarPrecio(){
    //Actualizar precioBoletos
   let sp = document.getElementById("tarifa");
   let precio = localStorage.getItem("precioBoletos");
   sp.textContent = precio;
}
//sergio
function verificarAsientosnoDisponibles(){
    var parametros = {
        "id" : localStorage.getItem("idFuncion")
    }
    $.ajax({
        type: "POST",
        method: "POST",
        url: '../Modelo/mostrarAsientosnoDisponible.php',
        data: parametros,
        success: function(response){
            //Lamada a la funcion actualizar
            cambiarEstadoOcupados(response);
        }
   });
}
function cambiarEstadoOcupados(ocupados){
    //Tokenizar string 
    let array = ocupados.split(",");
    //Quitar el ultimo elemento
    array.pop();
    //Recorrer el array
    for(let i = 0; i < array.length; i++){
        let myDiv = document.getElementById(array[i]);
        myDiv.className = "Ocupado"; 
    }
}
//sergio


/* RESERVACION DE LOS ASIENTOS*/




function cambiarEstadoBoleto(nombreClase){
  
    let myDiv = document.getElementById(nombreClase.id);
     let nombClass = myDiv.className;
     if(nombClass ==  "columna_Disponible"){
         if(verificarNumeroBoletosAsientos()){

             myDiv.className = "columna_noDisponible";
            //Ingresar a array en local storage
            let arreglo = localStorage.getItem("asientosSelecionados");
            arreglo = JSON.parse(arreglo);
            arreglo.push(myDiv.id);
            //Guardar
            localStorage.setItem("asientosSelecionados", JSON.stringify(arreglo));
            reservarAsiento(myDiv.id);
 
            
         } 
     }else if(nombClass == "columna_noDisponible"){
         if(decrementarNumeroAsientos()){
            
             myDiv.className = "columna_Disponible";
             //Ingresar a array en local storage
            let arreglo = localStorage.getItem("asientosSelecionados");
            arreglo = JSON.parse(arreglo);
            for(var i in arreglo){
                if(arreglo[i]==myDiv.id){
                const unicos=arreglo.filter((item)=>item!== arreglo[i]);
                localStorage.setItem("asientosSelecionados", JSON.stringify(unicos));
             }
            }


            

         quitarReservaAsiento(myDiv.id);
     }else if(nombClass == "No disponible"){
         return;   
     }
 }
}
 
 function verificarNumeroBoletosAsientos(){
     let num = localStorage.getItem("numAsientosSelecionados");
     if(num <localStorage.getItem("numBoletos")){
         num++
         localStorage.setItem("numAsientosSelecionados",num);
         return true;
     }else{
         alert("No se puede seleccionar mas asientos");
         return false;
     }
 }
 function decrementarNumeroAsientos(){
     let num = localStorage.getItem("numAsientosSelecionados");
     if(num > 0){
         num--;
         localStorage.setItem("numAsientosSelecionados",num);
         return true;
     }else{
         alert("No se puede eliminar asientos");
         return false;
     };
 }
 
 function verificarAsientosCompletos(){
     let num = localStorage.getItem("numAsientosSelecionados");
     if(num!=localStorage.getItem("numBoletos")){
         localStorage.getItem("numBoletos")
         alert("Falto seleccionar asientos");
         
     }else{
         alert("Se ha realizado la reservación de los asientos");
         location.href="indexOpcion.html";
         
     }
 }
 

 


function reservarAsiento(asiento){

    $.ajax({
        type: "POST",
        method: "POST",
        url: '../Modelo/reservarAsiento.php',
        data: {asiento: asiento},
        success: function(response){
            console.log(response);
        }
   });

}

function quitarReservaAsiento(asiento){

    
    $.ajax({
        type: "POST",
        method: "POST",
        url: '../Modelo/eliminarReservaAsiento.php',
        data: {asiento: asiento},
        success: function(response){
            
            console.log(response);
        }
   });
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
