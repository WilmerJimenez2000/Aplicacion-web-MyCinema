/*import{validarFormulario} from '../Vista/js/validarFuncion.js';

$(document).ready(function () {

cargarPeliculas();
cargarSalas();


$("#mySala").change(function(){
    cargarHoras();

});

});


function cargarPeliculas(){
    $.ajax({
        type: "GET",
        url: '../Modelo/seleccionPelicula.php',
        success: function(response){
            $('#myPelicula').html(response);
        }
   });
}


function cargarSalas(){

   $.ajax({
    type: "GET",
    url: '../Modelo/seleccionSala.php',
    success: function(r){
        $('#mySala').html(r);
    }
    });
}

function cargarHoras(){

  let search =$('#mySala').val();

  $.ajax({
    url: '../Modelo/validacionHora.php',
    type: 'POST',
    data: {search: search},
    success: function(response){
        $('#horaDisponible').html(response);
    }

  });

}



    $('#formulario').submit(function (e) {
        
        let res=validarFormulario()
        if(res){

            alert("Se ingreso Correctamente");
            
           
        }





    });*/

    import { validarFormulario } from "../Vista/js/validarFuncion.js";

$(document).ready(function () {
  cargarPeliculas();
  cargarSalas();

  $("#mySala").change(function () {
    cargarHoras();
  });

  $("#formulario").submit(function (e) {
    e.preventDefault();
    let res = validarFormulario();
    if (res) {
        $.ajax({
          type: "POST",
          url: "../Modelo/insetarFuncion.php",
          data: $(this).serialize(),
          success: function (response) {
            
            //console.log(response);
            
            var jsonData = JSON.parse(response);
            // user is logged in successfully in the back-end
            // let's redirect

            switch(jsonData.success){
                case 1:
                    //alert(jsonData.my);
                    alert("Pelicula Ingresada");
                    $("#myPelicula").val("");
                    $("#mySala").val("");
                    $("#horaDisponible").val("");
                    $("#tarifa").val("");
                    break;
                case 2:
                    alert('El rango de horas esta ocupado');
                    break;
                default:
                    break;
            }
          },
        });
    }
    
  });
});

function cargarPeliculas() {
  $.ajax({
    type: "GET",
    url: "../Modelo/seleccionPelicula.php",
    success: function (response) {
      $("#myPelicula").html(response);
    },
  });
}

function cargarSalas() {
  $.ajax({
    type: "GET",
    url: "../Modelo/seleccionSala.php",
    success: function (r) {
      $("#mySala").html(r);
    },
  });
}

function cargarHoras() {
  let search = $("#mySala").val();

  $.ajax({
    url: "../Modelo/validacionHora.php",
    type: "POST",
    data: { search: search },
    success: function (response) {
      $("#horaDisponible").html(response);
    },
  });
}