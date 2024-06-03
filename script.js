

const commandInput = document.getElementById('command-input');
const outputDiv = document.querySelector('.output');

var IsLogged = false;

var nameUser = '';

$(".deslogar").hide();

$.ajax({
    url: './controllers/IsLogged.php',
    type: 'GET',
    success: function(response) {
        if (response === 'true') {
            $(".deslogar").show();

            $.ajax({
                url: './controllers/TipoUserLogged.php',
                type: 'get',
                success: function(response) {
                    if (response == 1) {
                        document.querySelector(".status-res").innerHTML = 'Você está logado como <span class="tipoUser">usuário Estudante</span>!';
                    } else {
                        document.querySelector(".status-res").innerHTML = 'Você está logado como <span class="tipoUser admin">usuário Professor</span>!';
                    };

                    $.ajax({
                        url: './controllers/GetDadosUser.php',
                        type: 'get',
                        success: function(response) {

                        nameUser = response;

                           document.querySelectorAll(".NameUser").forEach(element => {
                                element.innerText = `C:/Users/${response.split(" ")[0].trim()}>`;
                            });
                        },
                        error: function(xhr, status, error) {
                            reject('Erro na requisição: ' + status + ' - ' + error);
                        }
                    }); 

                },
                error: function(xhr, status, error) {
                    reject('Erro na requisição: ' + status + ' - ' + error);
                }
            }); 

            $(".OptionsAccounts").hide();

            IsLogged = true;
        };
    },
    error: function(xhr, status, error) {
        reject('Erro na requisição: ' + status + ' - ' + error);
    }
});    

commandInput.focus();

commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        executeCommand(commandInput.value);
        commandInput.value = '';
        commandInput.scrollIntoView({ behavior: 'smooth' });
    }
});

function executeCommand(command) {
    const outputElement = document.createElement('div');
    outputElement.classList.add('command');
    outputElement.textContent = `C:/Users/${nameUser.split(" ")[0].trim()}> ${command}`;
    outputDiv.appendChild(outputElement);

    const resultElement = document.createElement('div');
    resultElement.classList.add('result');

    if (IsLogged) {
        switch (command)  {
            case 'clear':
                outputDiv.innerHTML = '';
                break;
            case 'exit':
                Swal.fire({
                    title: "Você está saindo da sua conta",
                    showDenyButton: true,
                    confirmButtonText: "Continuar",
                    denyButtonText: `Cancelar`
                  }).then((result) => {
                    if (result.isConfirmed) {
                        $.ajax({
                            url: './controllers/LogOut.php',
                            type: 'GET',
                            success: function(response) {
                                if (response === 'true') {
                                    window.location.href = "index.php";                  
                                };
                            },
                            error: function(xhr, status, error) {
                                reject('Erro na requisição: ' + status + ' - ' + error);
                            }
                        }); 
            
                    } else if (result.isDenied) {
                      Swal.fire("Operação cancelada!", "", "info");
                    }
                  });    
            break;
        };

        if ( command.split(' ')[0] === 'clima') {

            if (command.split(' ').length > 1) {
                const city = command.split(' ').slice(1).join(' ');

                const apiClima = {
                    key: "64ed82577ced7f69cb1687f0ce536131",
                    base: "https://api.openweathermap.org/data/2.5/",
                    lang: "pt_br",
                    units: "metric"
                };

                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&APPID=64ed82577ced7f69cb1687f0ce536131`)
                    .then(response => {
                        if (!response.ok) {
                            document.querySelector(".output").innerHTML  += `
                                <div class="result"><span class="erro-span">Cidade Inválida!</span></div>
                            `;
                        }
                            return response.json();
                        })
                    .catch(error => {
                        document.querySelector(".output").innerHTML  += `
                            <div class="result"><span class="erro-span">Erro no servidor!</span></div>
                        `;
                    })
                    .then(response => {
                        console.log(response);
                        document.querySelector(".output").innerHTML  += `
                            <div class="result">Cidade: <span class="success-span">${city}</span></div>
                            <div class="result">País: <span class="success-span">${response.sys.country}</span></div>
                            <div class="result">Temperatura: <span class="success-span">${response.main.temp}°</span></div>
                            <div class="result">Descrição: <span class="success-span">${response.weather[0].description}° <img class="img-icon-weather" src="https://openweathermap.org/img/wn/${response.weather[0].icon}.png"></span></div>

                        `;
                    });
                

            } else {
                document.querySelector(".output").innerHTML  += `
                    <div class="result"><span class="erro-span">A sintaxe do comando está incorreta!</span></div>
                    <div class="result"><span class="info">clima [nome da cidade]</span></div>
                `;
            };
        };

        return;
    };

    if (!IsLogged) {
        switch (command)  {
            case 'login':
                window.location.href = "./login.php";
                break;
            case 'criar':
                window.location.href = "./criar.php";
                break;
            case 'clear':
                outputDiv.innerHTML = '';
                break;
            default:
                document.querySelector(".output").innerHTML  += `
                    <div class="result"><span class="erro-span">Você não está logado!</span></div>
                `;
                break;
        };
        return;
    };

    outputDiv.appendChild(resultElement);
    outputDiv.scrollTop = outputDiv.scrollHeight;
    commandInput.focus();
}

$(".linkDeslogar").click(() => {
    Swal.fire({
        title: "Você está saindo da sua conta",
        showDenyButton: true,
        confirmButtonText: "Continuar",
        denyButtonText: `Cancelar`
      }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: './controllers/LogOut.php',
                type: 'GET',
                success: function(response) {
                    if (response === 'true') {
                        window.location.href = "index.php";                  
                    };
                },
                error: function(xhr, status, error) {
                    reject('Erro na requisição: ' + status + ' - ' + error);
                }
            }); 

        } else if (result.isDenied) {
          Swal.fire("Operação cancelada!", "", "info");
        }
      });    
});