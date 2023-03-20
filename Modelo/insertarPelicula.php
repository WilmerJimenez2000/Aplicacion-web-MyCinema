<?php
    include_once('conexion.php');
    $titulo = $_POST['titulo'];
    $sinopsis = $_POST['sinopsis'];
    $director = $_POST['director'];
    $duracion = $_POST['duracion'];
    $clasificacion = $_POST['clasificacion'];
    $idioma = $_POST['idioma'];
    $genero = $_POST['genero'];
    $estado = $_POST['estado'];

    $conectar=conexionphp();//Inicia la conexion
    
    $sql ="INSERT INTO Pelicula(titulo, sinopsis, director, duracion, clasificacion, idiomas, genero, estado) VALUES ('$titulo', '$sinopsis', '$director', '$duracion', '$clasificacion', '$idioma', '$genero', '$estado')";
    $result = mysqli_query($conectar,$sql) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conectar),E_USER_ERROR);
    echo json_encode(array('success' => $result,'name' => $_POST['titulo']));
?>