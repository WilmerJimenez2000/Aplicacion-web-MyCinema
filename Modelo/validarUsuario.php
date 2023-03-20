<?php
    include_once('conexion.php');
    $correo = $_POST['correo'];
    $contrasenia = $_POST['contrasenia'];
    $conexion=conexionphp();



    $query="SELECT * FROM Usuario WHERE correoElectronico='$correo'";
    $resultado=$conexion->query($query);
    $row = $resultado->fetch_array(MYSQLI_ASSOC);

    if ($resultado->num_rows > 0 ){

        $query_1="SELECT * FROM Contrasenia WHERE CI='".$row['CI']."'";
        $resultado_1=$conexion->query($query_1);
        $row_1 = $resultado_1->fetch_array(MYSQLI_ASSOC);

    
    if(password_verify($contrasenia,$row_1['hashContrasena'])){

      echo  $row['nombre'];
        
    }else{

        echo "FalseContrasena";
    }
}else{

        echo "FalseEmail";
    }

    $conexion->close(); 

?>