<?php

// Include arquivo de conexão
include('../includes/lps-connect.php');

$email = json_decode($_POST['data']);

// Preparar e executar a consulta SQL para selecionar o usuário
$result = mysqli_query($connection, "SELECT * FROM cadUser WHERE email = '$email';");

if ($result) {
    // Se o usuário for encontrado, retornar o ID
    if (mysqli_num_rows($result) > 0) {
        echo 'false';
    } else {
        echo 'true';
    }
} else {
    // Se houver um erro na consulta, mostrar uma mensagem de erro
    echo "ERROR LOG: " . mysqli_error($connection);
}