<?php

// Conexão com o banco de dados
$host_db = '127.0.0.1'; // Hostname do Servidor
$user_db = 'root'; // Usuário do Servidor
$pass_db = ''; // Senha do Servidor
$name_db = 'terminal.exe'; // Nome do Banco de Dados

// Query de Conexão com o Banco
$connection = mysqli_connect( $host_db , $user_db , $pass_db , $name_db );