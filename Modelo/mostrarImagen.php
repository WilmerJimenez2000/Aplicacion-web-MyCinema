<?php
    include('conexion.php');

    //$id=$_POST['numero'];
    
    $conexion=conexionphp();
    

    $query="SELECT * FROM Imagen_Pelicula";
    $resultado=$conexion->query($query);
    if($resultado->num_rows>0){
        //$row= $resultado->fetch_assoc();
        while ($row = $result->fetch_array(MYSQLI_ASSOC)) 
        {
            $lista="<div class='carousel-item active'>";
            $lista.="<img src='data:image/jpg;base64,".base64_encode( $row['imagen'] )."'/>";
            $lista.="</div>";
        }
        
        echo $lista;
        
        //echo base64_encode($row['Imagen']);
        //echo $row['Imagen'];
    }
    else{
        echo 'no hay';
    }
?>