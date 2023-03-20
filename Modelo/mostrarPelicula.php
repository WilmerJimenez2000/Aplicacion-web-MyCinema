<?php
    include_once('conexion.php');
    $num_control = $_REQUEST['numcontrol'];
    $conectar=conexionphp();//Inicia la conexion
    $sql ="SELECT *FROM Pelicula WHERE idPelicula=$num_control";
    $result = mysqli_query($conectar,$sql) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conectar),E_USER_ERROR);
    $dataPelicula;
    while($row = mysqli_fetch_array($result)){
        $dataPelicula[]=$row;
    }
    echo json_encode($dataPelicula);
    //echo json_encode(array('success' => 1,'id' => $_POST['id'], 'titulo' =>$_POST['titulo']));
?>