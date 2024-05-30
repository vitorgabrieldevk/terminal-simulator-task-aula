<?php

// Include arquivo de conexão
include('../includes/lps-connect.php');

$dados = json_decode($_POST['data']);

$hashedPassword = password_hash($dados->password, PASSWORD_DEFAULT);

$result = mysqli_query($connection, "INSERT INTO caduser (name, password, email, tipoUser) VALUES 
                                     ('$dados->name', '$hashedPassword', '$dados->email', '$dados->tipoUser')");

echo 'true';