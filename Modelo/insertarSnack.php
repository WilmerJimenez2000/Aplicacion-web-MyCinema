<?php
    include_once('conexion.php');
    $nombre = $_POST['nombre'];
    $Categoria = $_POST['Categoria'];
    $Precio = $_POST['Precio'];
    $Estado = $_POST['Estado'];
    $Descripcion = $_POST['Descripcion'];
    $conectar=conexionphp();//Inicia la conexion
    $sql ="INSERT INTO Snack(nombre, categoria,precio,estado,descripcion) VALUES ('$nombre', '$Categoria', '$Precio', '$Estado', '$Descripcion')";
    $result = mysqli_query($conectar,$sql) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conectar),E_USER_ERROR);
    echo json_encode(array('success' => $result)); 
?>