<?php

// Include arquivo de conexão
include('../includes/lps-connect.php');

$data = json_decode($_POST['dados']);

// Preparar e executar a consulta SQL para selecionar o usuário
$passValid = mysqli_query($connection, "SELECT * FROM cadUser WHERE idcadUser = $data->idUsuario AND password = $data->pass;");

// Verificar se a consulta foi bem-sucedida
if ( $passValid ) {
    if ( mysqli_num_rows( $passValid ) > 0 ) {

        if ( !isset($_SESSION) ) session_start();

        $_SESSION['IsLogged'] = true;
        $_SESSION['idUser'] = $data->idUsuario;

        echo true;
    } else {
        echo false;
    }
} else {
    // Se houver um erro na consulta, mostrar uma mensagem de erro
    echo "ERROR LOG: " . mysqli_error($connection);
}