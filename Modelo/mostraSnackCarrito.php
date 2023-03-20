<?php
include_once('conexion.php');
$conexion=conexionphp();
$idSnack=$_POST['snacks_stack'];
$listsnackcarrito="<ul style='color: white'>";

for ($x=0;$x<count($idSnack); $x++){
$id= $idSnack[$x][0];
$sql="SELECT * FROM Snack WHERE idSnack='$id' ";
$result = $conexion->query($sql);
$row = $result->fetch_array(MYSQLI_ASSOC);
$sql1="SELECT * FROM Imagen_Snack WHERE nombre= '".$row['nombre']."'";
        $result1 = $conexion->query($sql1); 
        $row1 = $result1->fetch_array(MYSQLI_ASSOC);
        $listsnackcarrito.="<br><img width='100' height='100' src='data:image/jpg;base64,".base64_encode( $row1['imagen'] )."'/>";
$listsnackcarrito.="<li>".$row['nombre']."</li>";
$listsnackcarrito.="<p id='".$row['idSnack']."'>".$idSnack[$x][2]." $</p>";
$listsnackcarrito.="<input id='".$row['idSnack']."' type='number' min='1' value='".$idSnack[$x][1]."' onchange='stockSnack(this.value,".$row['idSnack']."); '><br>";
$listsnackcarrito.="<input type='button' value='Eliminar del Carrito' onclick='deleteSnackCarrito(".$row['idSnack'].")'  style='background-color: orange'>";
}
$listsnackcarrito.="</ul>";
echo $listsnackcarrito;
$conexion->close();

?>