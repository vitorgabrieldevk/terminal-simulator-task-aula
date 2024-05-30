
var Usuarios =  {
    "email" : "vitor@gmail.com",
    "senha": "123456"
};



const commandInput = document.getElementById('command-input'); // Input de comandos
const outputDiv = document.querySelector('.output'); // Listagem dos comandos

// Põe o foco no campo
commandInput.focus();

// Bloco de verificação de submit dos comandos
commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        executeCommand(commandInput.value);
        commandInput.value = '';
        commandInput.scrollIntoView({ behavior: 'smooth' });
    }
});

var IsValidEmail = false; // Config Email ou senha

// Função de execuçaõ dos comandos
function executeCommand(command) {
    const resultElement = document.createElement('div');
    resultElement.classList.add('result');

    if ( IsValidEmail == false) {

        // Email deve ter mais do que 5 caracteres
        if ( command.length > 5 ) {
            // Processo de validação de E-mail
            if (Usuarios.email === command) {
    
                document.querySelector(".output").innerHTML  += `
                    <div class="result">Processando dados, aguarde...</div>
                `;

                // Alterar o tipo do campo
                commandInput.type = 'password';

                // Troca o tipo de validação a ser feita
                IsValidEmail = true;

                // Esconde todos os elementos com a class current-dir da view
                $(".current-dir").hide();
    
                // Exibi bloco de mensagem de input atual
                document.querySelector(".output").innerHTML  += `
                    <hr>
                    <div class="result">C:/Users/vitor> ~ Digite sua senha:</div>
    
                    <div class="prompt">
                        <span class="user-name">C:/Users/vitor></span>
                        <span class="current-dir">~</span>
                        <span class="cursor">|</span>
                    </div>
                `;

            } else {
                // Exibi a mensagem de erro de E-mail incorreta
                document.querySelector(".output").innerHTML  += `
                    <div class="result"><span class="erro-span">Este E-mail não está cadastrado!</span></div>
                `;
            };
    
        } else {
                // Exibi a mensagem de erro de E-mail inválida
            document.querySelector(".output").innerHTML  += `
                    <div class="result"><span class="erro-span">Digite um E-mail válido</span></div>
            `;
        }
    } else {

        // Email deve ter mais do que 4 caracteres
        if ( command.length > 4 ) {
    
            // Processo de validação de E-mail
            if (Usuarios.senha === command) {
    
                // Alterar o tipo do campo
                commandInput.type = 'text';

                // Exibi mensagem de processamento
                document.querySelector(".output").innerHTML  += `
                    <div class="result">Processando dados, aguarde...</div>
                `;

                // Ocultar todos os elementos current-dir da view
                $(".current-dir").hide();
    
                // Exibi a mensagem de login efetuado com sucesso
                document.querySelector(".output").innerHTML  += `
                    <hr>
                    <div class="result"><span class="success-span">Login efetuado com sucesso!</span></div>
                `;
            } else {
                // Exibi a mensagem de erro de senha incorreta
                document.querySelector(".output").innerHTML  += `
                    <div class="result"><span class="erro-span">Senha está incorreta!</span></div>
                `;
            };
    
        } else {
                // Exibi a mensagem de erro de senha inválida
            document.querySelector(".output").innerHTML  += `
                    <div class="result"><span class="erro-span">Digite uma senha válido</span></div>
            `;
        }
    };

    // Imprimi na tela caso tenha algum texto configurado
    outputDiv.appendChild(resultElement);
    outputDiv.scrollTop = outputDiv.scrollHeight;

    // Põe o foco no campo
    commandInput.focus();
}