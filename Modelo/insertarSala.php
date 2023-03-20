<?php
    include_once('conexion.php');
    $capcidad = $_POST['Capacidad'];
    $soporte = $_POST['Soporte'];
    $horaInicio = $_POST['horaInicio'];
    $horaFin = $_POST['horaFin'];
    $estado = $_POST['Estado'];
    $conectar=conexionphp();//Inicia la conexion
    //$sql ="INSERT INTO Sala(capacidad, soporte, horaInicio, horaFin, estado) VALUES ('$capcidad', '$soporte', '$horaInicio', '$horaFin', '$estado')";
    $sql="delete from Sala where idSala=4";
    $result = mysqli_query($conectar,$sql) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conectar),E_USER_ERROR);
    //echo $result;
    echo json_encode(array('success' => $result));
?>