$(document).ready(function () {

    cargarSnacksCarrito();
    precioTotalCompra();

    



});



function cargarSnacksCarrito() {

    let snacks_stack = [];
    var array = localStorage.getItem("snacksIngresados");
    array = JSON.parse(array);


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


function deleteSnackCarrito(snack) {

    
    var snack_unicos = localStorage.getItem("snacksIngresados");
    snack_unicos= JSON.parse(snack_unicos);


    for(var i in snack_unicos){
        var data=JSON.parse(snack_unicos[i]);
        if(data.snack==snack){
        
        const unicos=snack_unicos.filter((item)=>item!== snack_unicos[i]);
        localStorage.setItem("snacksIngresados", JSON.stringify(unicos));
        cargarSnacksCarrito();
        precioTotalCompra();
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
        precioTotalCompra();
     }
    }
    
}

function precioTotalCompra(){
    var snack_unicos = localStorage.getItem("snacksIngresados");
    var boletos=localStorage.getItem("precioBoletos");
    snack_unicos= JSON.parse(snack_unicos);
    var pTotal=parseFloat(boletos);
    var cont=0;
    
    for(var i in snack_unicos){
        cont++;
        var data=JSON.parse(snack_unicos[i]);
        pTotal= parseFloat((pTotal+data.precioTotal).toFixed(3));
        $('#precioTotalCom').text(" $"+pTotal+""); 
    }
    if(cont==0){
        $('#precioTotalCom').text("$"+pTotal+" "); 
    }
    localStorage.setItem('total',pTotal);
}
