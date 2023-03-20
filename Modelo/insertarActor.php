<?php
    include_once('conexion.php');
    $nombre = $_POST['nombre'];
    $nacionalidad = $_POST['nacionalidad'];
    $edad = $_POST['edad'];
    $conectar=conexionphp();//Inicia la conexion
    $sql ="INSERT INTO Actor(nombre, nacionalidad,edad) VALUES ('$nombre', '$nacionalidad', '$edad')";
    //$sql="delete from Actor where idActor=84";
    $result = mysqli_query($conectar,$sql) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conectar),E_USER_ERROR);
    //echo $result;
    echo json_encode(array('success' => $result,'name' => $_POST['nombre']));
?>