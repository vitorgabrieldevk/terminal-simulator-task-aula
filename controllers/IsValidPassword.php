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

        echo true;
} else {
    echo false;
}