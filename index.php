<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C:\Program Files (x86)/terminal.exe</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
    <div class="terminal">
        <div class="prompt">
            <span class="user-name">C:\Program Files (x86)/terminal.exe | Trabalho de programação web II | Aluno: Vitor Gabriel de Oliveira</span>
        </div>
        <hr>
        <div class="prompt">
            <span class="user-name link-container OptionsAccounts">
                C:\Program Files (x86)\Microsoft.NET\Primary>
                <a href="login.php" class="link"><i class="bi bi-box-arrow-in-right"></i> Entrar na sua conta</a>
            </span>
        </div>
        <div class="prompt LogOut  ">
            <span class="user-name link-container OptionsAccounts">
                C:\Program Files (x86)\Microsoft.NET\Primary>
                <a href="criar.php" class="link"><i class="bi bi-person-plus"></i> Criar sua conta</a>
            </span>
        </div>
        <hr class="OptionsAccounts">
        <div class="prompt deslogar">
            <span class="user-name link-container">
                C:\Windows\System32\Boot\pt-BR>
                <a href="#" class="link linkDeslogar"><i class="bi bi-box-arrow-left"></i> Deslogar</a>
            </span>
        </div>
        <hr class="deslogar">
        <div class="prompt">
            <span class="user-name">C:/Users/vitor></span>
            <span class="current-dir">~ </span>
            <span class="comand">&nbsp; $ <span class="status">Status: </span><span class="status-res">Não está logado</span></span>
        </div>
        <hr>
        <div class="prompt">
            <span class="user-name">C:/Users/vitor></span>
            <span class="current-dir">~</span>
            <span class="cursor">|</span>
        </div>
        <div class="output">
                
        </div>
        <div class="input">
            <input type="text" id="command-input">
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
