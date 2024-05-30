<?php

// Include arquivo de conexão
include('../includes/lps-connect.php');

$data = json_decode($_POST['dados']);

// Preparar e executar a consulta SQL para selecionar o usuário
$passValid = mysqli_query($connection, "SELECT * FROM cadUser WHERE idcadUser = $data->idUsuario;");
$row = mysqli_fetch_assoc($passValid);

$isValid = password_verify($data->pass, $row['password']);

// Verificar se a consulta foi bem-sucedida
if ( $isValid ) {
        if ( !isset($_SESSION) ) session_start();

        $_SESSION['IsLogged'] = true;
        $_SESSION['idUser'] = $data->idUsuario;

        $date = date('d/m/Y H:i:s');

        mysqli_query($connection, "INSERT INTO tblogin (cadUser_idcadUser) VALUES 
                                     ('$data->idUsuario')");

        echo true;
} else {
    echo false;
}