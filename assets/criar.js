
const commandInput = document.getElementById('command-input'); // Input de comandos
const outputDiv = document.querySelector('.output'); // Listagem dos comandos

var ObjectCreateAccount = {
    name : '',
    email : '',
    password : '',
    tipoUser : ''
};

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
var idUser = 0; // Id do usuário para fazer login

// Função de execuçaõ dos comandos
function executeCommand(command) {
    const resultElement = document.createElement('div');
    resultElement.classList.add('result');

    if ( IsValidEmail == false) {

        // Email deve ter mais do que 5 caracteres
        if ( command.length > 5 ) {
            // Processo de validação de E-mail

            document.querySelector(".output").innerHTML  += `
                            <div class="prompt">
                                <span class="user-name">C:/Users/vitor></span>
                                <span class="current-dir">~&nbsp;</span>
                                <span class="comand">${command}</span>
                            </div>
                `;

            $.ajax({
                url: './controllers/ExistEmail.php',
                type: 'post',
                data: { data : JSON.stringify(command) },
                success: function(response) {
                        if (response !== 'false') {

                        ObjectCreateAccount.email = command;
        
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
                        // Exibi a mensagem de erro de E-mail incorreto
                        document.querySelector(".output").innerHTML  += `
                            <div class="result"><span class="erro-span">Este e-mail já está cadastrado!</span></div>
                        `
                    };
                },
                error: function(xhr, status, error) {
                    reject('Erro na requisição: ' + status + ' - ' + error);
                }
            });    
        } else {
             // Exibi a mensagem de erro de E-mail inválida
            document.querySelector(".output").innerHTML  += `
                    <div class="result"><span class="erro-span">Digite um E-mail válido</span></div>
            `;
        }
    } else {

        // Email deve ter mais do que 4 caracteres
        if ( command.length > 4 ) {
    
            var IsValidPassord = false;

            ObjectCreateAccount.password = command;

             // Alterar o tipo do campo
             commandInput.type = 'text';

             // Exibi mensagem de processamento
             document.querySelector(".output").innerHTML  += `
                 <div class="result">Processando dados, aguarde...</div>
             `;

             // Ocultar todos os elementos current-dir da view
             $(".current-dir").hide();
 
             Swal.fire({
                title: "Informe seu tipo de usuário",
                showDenyButton: true,
                confirmButtonText: "Sou Estudante",
                denyButtonText: `Sou professor`
              }).then((result) => {
                if (result.isConfirmed) {
                    ObjectCreateAccount.tipoUser = 1;
                } else if (result.isDenied) {
                    ObjectCreateAccount.tipoUser = 2;
                };

                    Swal.fire({
                        title: "Digite seu nome",
                        input: "text",
                        inputAttributes: {
                            autocapitalize: "off"
                        },
                        showCancelButton: true,
                        confirmButtonText: "Salvar",
                        showLoaderOnConfirm: true,
                        preConfirm: async (login) => {
                            ObjectCreateAccount.name = login;
                        },
                        allowOutsideClick: () => !Swal.isLoading()
                    }).then((result) => {
                        if (result.isConfirmed) {
                            $.ajax({
                                url: './controllers/CreateAccount.php',
                                type: 'post',
                                data: { data : JSON.stringify(ObjectCreateAccount) },
                                success: function(response) {
                                    
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Sua conta foi criada",
                                        showConfirmButton: false,
                                        timer: 1500
                                      });

                                      setTimeout(() => {
                                            window.location.href = "index.php";
                                      }, 1500);

                                },
                                error: function(xhr, status, error) {
                                    reject('Erro na requisição: ' + status + ' - ' + error);
                                }
                            });      
                        }
                    });

              });
           

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