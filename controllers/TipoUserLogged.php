<?php

if ( !isset($_SESSION) ) session_start();

$idUser = $_SESSION['idUser'];

$TypeUser = mysqli_query($connection, "SELECT * FROM cadUser WHERE idcadUser = $idUser;");

if ($TypeUser) {
    if (mysqli_num_rows($TypeUser) > 0) {
        $row = mysqli_fetch_assoc($result);
        $userID = $row['idcadUser'];
    };
};