<?php

// Include arquivo de conexão
include('../includes/lps-connect.php');

$email = json_decode($_POST['data']);

// Preparar e executar a consulta SQL para selecionar o usuário
$ExistEmail = mysqli_query($connection, "SELECT * FROM cadUser WHERE email = '$email';");

// Verificar se a consulta foi bem-sucedida
if ( $ExistEmail ) {
    if ( mysqli_num_rows( $ExistEmail ) > 0 ) {
        echo true;
    } else {
        echo false;
    }
} else {
    // Se houver um erro na consulta, mostrar uma mensagem de erro
    echo "ERROR LOG: " . mysqli_error($connection);
}