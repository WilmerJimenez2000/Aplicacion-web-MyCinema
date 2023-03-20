<?php
    include_once('conexion.php');
    
    //funciones
    $conectar=conexionphp();//Inicia la conexion
    
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $ci = $_POST['ci'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $contrasenia = $_POST['contrasenia'];
    $telefono = $_POST['telefono'];
    $fechaN = $_POST['fechaN'];

    
    ///encriptacion de la contraseña

    $pass_fuerte=password_hash($contrasenia, PASSWORD_DEFAULT);


    $sql ="INSERT INTO Usuario(CI, nombre, apellido, direcciónDomiciliaria, telefono,fechaNacimiento, correoElectronico) 
    VALUES ('$ci', '$nombre', '$apellido', '$direccion', '$telefono', '$fechaN', '$email')";

    
    $result = mysqli_query($conectar,$sql) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conectar),E_USER_ERROR);
    echo json_encode(array('success' => $result,'nombre' => $_POST['nombre']));
    
    $sql_1 ="INSERT INTO Contrasenia(CI, hashContrasena) 
    VALUES ('$ci', '$pass_fuerte')";

    $result_1 = mysqli_query($conectar,$sql_1) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conectar),E_USER_ERROR);
    echo json_encode(array('success' => $result_1,'ci' => $_POST['ci']));

?>