<?php

// Include arquivo de conexão
include('../includes/lps-connect.php');

$dados = json_decode($_POST['data']);

$hashedPassword = password_hash($dados->password, PASSWORD_DEFAULT);

$result = mysqli_query($connection, "INSERT INTO caduser (name, password, email, tipoUser) VALUES 
                                     ('$dados->name', '$hashedPassword', '$dados->email', '$dados->tipoUser')");

// Check for insertion errors
if (!$result) {
  exit;
}

// Busca os dados de Login
$GetUser = mysqli_query($connection, "SELECT * FROM cadUser WHERE email = '$dados->email';");
$row = mysqli_fetch_assoc($GetUser);

if ($row) { // Check if user exists before accessing properties
  session_start();
  $_SESSION['IsLogged'] = true;
  $_SESSION['idUser'] = $row['idcadUser'];

  mysqli_query($connection, "INSERT INTO tblogin (cadUser_idcadUser) VALUES 
                                                                      ('$data->idUsuario')");

  echo 'true';
};

