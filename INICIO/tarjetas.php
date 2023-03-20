<?php
include_once('conexion.php');
$conexion=conexionphp();
date_default_timezone_set('America/Guayaquil'); 
$DateAndTime = date('Y-m-d');  
//$sql="SELECT * FROM Imagen_Pelicula";
$sql="SELECT * FROM Pelicula";
$result = $conexion->query($sql); 
if ($result->num_rows > 0){
    $lista='<br>';
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) 
    {
        if($row['estado']=='true'){
            $sql1="SELECT fecha FROM Funcion where Pelicula_idPelicula=".$row['idPelicula']."";
            $result1 = $conexion->query($sql1);
            if ($result1->num_rows > 0){
                $cont=0;
                while ($row1 = $result1->fetch_array(MYSQLI_ASSOC)) 
                {
                    if($row1['fecha']>=$DateAndTime){
                        $cont++;
                        //echo $row1['fecha'].'<br>';
                    }
                }
                if($cont>0){
                    $lista.="<div class='card' style='width: 18rem; margin-left:10px;'>";
                    $lista.="<img width='250' height='300' src='data:image/jpg;base64,".base64_encode( $row['imagen'] )."'/>";
                    $lista.="<div class='card-body'>";
                    $lista.="<h5 class='card-title'>".$row['titulo']."</h5>";
                    $lista.="<a onclick='guardarIdPelicula(".$row['idPelicula'].");'  href='../Vista/indexSeleccionFuncion.html' id='".$row['idPelicula']."' class='btn btn-primary' style='margin-buttom:100px;'>Ver mas...</a>";
                    $lista.="</div>";
                    $lista.="</div>";
                }
            }
        }
    }
    echo $lista;
}
else{
    echo 'no hay';
}
$conexion->close();

?>