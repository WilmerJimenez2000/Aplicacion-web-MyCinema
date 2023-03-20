<?php
include_once('conexion.php');
$conexion=conexionphp();
$sql="SELECT * FROM Snack";
$result = $conexion->query($sql); 
if ($result->num_rows > 0){


    $listsnack="<br>";
   
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) 
    {
        $sql1="SELECT * FROM Imagen_Snack WHERE nombre= '".$row['nombre']."'";
        $result1 = $conexion->query($sql1); 
        $row1 = $result1->fetch_array(MYSQLI_ASSOC);
        $listsnack.="<br><img width='100' height='100' src='data:image/jpg;base64,".base64_encode( $row1['imagen'] )."'/>";
        $listsnack.="<div id= '".$row['nombre']."' onmouseover='mouseOver(".$row['idSnack'].")'   onmouseout='mouseOut(".$row['idSnack'].")'style='color: white; border: 1px solid orange; padding: 10px 10px'>";
        $listsnack.="<p>".$row['nombre']."</p>";
        $listsnack.="<p>".$row['precio']." $</p>";
        $listsnack.="<button  id='".$row['idSnack']."'onclick='addSnackCarrito(".$row['idSnack'].",".$row['precio']. ") '    style='display:none; background-color: orange;' >Añadir al carrito  ".$row['precio'] ."$</button>" ;
        $listsnack.="</div>";
    }

    echo $listsnack;
}
$conexion->close();

?>



