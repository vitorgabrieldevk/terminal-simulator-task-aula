<?php

// Include arquivo de conexão
include('../includes/lps-connect.php');

if ( !isset($_SESSION) ) session_start();

$idUser = $_SESSION['idUser'];

$TypeUser = mysqli_query($connection, "SELECT * FROM cadUser WHERE idcadUser = $idUser;");

if ($TypeUser) {
    if (mysqli_num_rows($TypeUser) > 0) {
        $row = mysqli_fetch_assoc($TypeUser);
        $name = $row['name'];

        echo $name;
    };
};