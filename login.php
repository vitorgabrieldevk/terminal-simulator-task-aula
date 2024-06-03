
<?php

// Iniciar sessão se ainda não estiver iniciada
if (!isset($_SESSION)) {
    session_start();
}

// Verificar se a variável de sessão 'IsLogged' existe e está definida como true
if (isset($_SESSION['IsLogged']) && $_SESSION['IsLogged'] === true) {
    // Usuário não está logado. Redirecionar para a página de login
    header('Location: index.php');
    exit(); // Interromper a execução do script
};

?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C:\Program Files (x86)/terminal.exe</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="./assets/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</head>
<body>
    <div class="terminal">
        <div class="prompt">
            <span class="user-name">C:\Program Files (x86)/terminal.exe | Trabalho de programação web II | Aluno: Vitor Gabriel de Oliveira</span>
        </div>
        <hr>
        <div class="prompt">
            <span class="user-name link-container">
                C:\Program Files (x86)\Microsoft.NET\Primary>
                <a href="criar.php" class="link"><i class="bi bi-person-plus"></i> Criar sua conta</a>
            </span>
        </div>
        <div class="prompt">
            <span class="user-name link-container">
                C:\Program Files (x86)\Microsoft.NET\Primary>
                <a href="index.php" class="link"><i class="bi bi-house-door-fill"></i> Página Principal</a>
            </span>
        </div>
        <hr>
        <div class="prompt">
            <span class="user-name">C:/Users/vitor> ~(˘▽˘~) <span class="titulo">Entre em sua conta rapidamente</span> (~˘▽˘)~</span>
        </div>
        <div class="prompt">
            <span class="user-name">C:/Users/vitor> ~ Digite seu E-mail:</span>
        </div>
        <div class="prompt current-dir">
            <span class="user-name">C:/Users/vitor></span>
            <span class="current-dir">~</span>
            <span class="cursor">|</span>
        </div>
        <div class="output"></div>
        <div class="input">
            <input type="text" id="command-input">
        </div>
    </div>

    <script src="assets/login.js"></script>
</body>
</html>
