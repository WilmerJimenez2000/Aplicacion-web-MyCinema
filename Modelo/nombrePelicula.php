<?php
if(isset($_POST['idPelicula'])){
    include_once('conexion.php');
    $id=$_POST['idPelicula'];
    $nombre="";
    $conectar=conexionphp();
    $sql ="SELECT titulo FROM Pelicula WHERE idPelicula=$id";
    $result = mysqli_query($conectar,$sql) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conectar),E_USER_ERROR);
    while($row = mysqli_fetch_array($result)){
        $nombre.="<h3>".$row['titulo']."</h3>";
    }
    echo $nombre;
}

?>