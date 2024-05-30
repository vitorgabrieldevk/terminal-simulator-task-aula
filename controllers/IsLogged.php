<?php

// Verifica se existe uma sessão para saber se está logado, caso não exista, ele inicie uma
if ( !isset($_SESSION) ) session_start();

// Verifica se está logado na sessão, caso não esteja retorna false, e caso esteja, retorna true
if ( isset($_SESSION['IsLogged']) ) {
    echo 'true';
} else  {
    echo 'false';
};
