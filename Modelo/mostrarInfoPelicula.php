<?php
if(isset($_POST['idPelicula'])){
    include_once('conexion.php');
    $id=$_POST['idPelicula'];
    $verPelicula="";
    $conectar=conexionphp();
    $sql ="SELECT * FROM Pelicula WHERE idPelicula=$id";
    $result = mysqli_query($conectar,$sql) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conectar),E_USER_ERROR);
    while($row = mysqli_fetch_array($result)){
        //$verPelicula.="<h3>".$row['hora']."</h3>";

        $verPelicula.="<div class='card' style='width: 17.3rem; margin-left:30px;'>";
        $verPelicula.="<img width='250' height='300' style='margin-top: 18px;' src='data:image/jpg;base64,".base64_encode( $row['imagen'] )."'/>";
        $verPelicula.="<div class='card-body'>";
        $verPelicula.="<h5 class='card-title'>".$row['titulo']."</h5>";
        $verPelicula.="<h5 >".$row['duracion']."</h5>";
        $verPelicula.="<h2 >Sinopsis</h2>";
        $verPelicula.="<h5 class='card-title'>".$row['sinopsis']."</h5>";
        $verPelicula.="<h2 >Informacion</h2>";
        $verPelicula.="<h5 >Clasificacion: ".$row['clasificacion']."</h5>";
        $verPelicula.="<h5 >Director: ".$row['director']."</h5>";
        $verPelicula.="<h5 >Genero: ".$row['genero']."</h5>";
        $verPelicula.="</div>";
        $verPelicula.="</div>"; 
    }
    echo $verPelicula;
}
?>