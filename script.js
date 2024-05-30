const commandInput = document.getElementById('command-input');
const outputDiv = document.querySelector('.output');

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
    outputElement.textContent = `C:/Users/vitor> ${command}`;
    outputDiv.appendChild(outputElement);

    const resultElement = document.createElement('div');
    resultElement.classList.add('result');

    switch (command) {
        case 'help':
            document.querySelector(".output").innerHTML  += `
                <div class="result">Para obter mais informações sobre um comando específico,</div>
                <div class="result">digite HELP nome_do_comando</div>
                <div class="result"><span class="list-comand">HELP</span> -----------------Exibe a lista de comandos</div>
                <div class="result"><span class="list-comand">ls</span>--------------------Exibe as pastas do diretório especificado ou atual.</div>
                <div class="result"><span class="list-comand">dir</span>-------------------Exibe as pastas do diretório especificado ou atual.</div>
            `;
            break;
        case 'ls':
            document.querySelector(".output").innerHTML  += `
                <div class="result">$ 29/05/2024  19:53    &lt;tDIR&gt;          .</div>
                <div class="result">$ 29/05/2024  19:53    &lt;DIR&gt;          ..</div> 
                <div class="result">$ 27/05/2024  09:29    &lt;DIR&gt;          .android</div> 
                <div class="result">$ 28/05/2024  10:27                76 .gitconfig</div> 
                <div class="result">$ 27/05/2024  10:38    &lt;DIR&gt;          .gradle</div> 
                <div class="result">$ 27/05/2024  21:50    &lt;DIR&gt;         .vscode</div> 
                <div class="result">$ 27/05/2024  19:24    &lt;DIR&gt;          Saved Games</div> 
                <div class="result">$ 27/05/2024  12:31    &lt;DIR&gt;          OneDrive</div>
                <div class="result">$ 2 arquivo(s)            197 bytes</div>
                <div class="result">$  14 pasta(s)   319.216.332.800 bytes disponíveis</div> 
            `;
            break;
        case 'dir':
            document.querySelector(".output").innerHTML  += `
                <div class="result">$ 29/05/2024  19:53    &lt;tDIR&gt;          .</div>
                <div class="result">$ 29/05/2024  19:53    &lt;DIR&gt;          ..</div> 
                <div class="result">$ 27/05/2024  09:29    &lt;DIR&gt;          .android</div> 
                <div class="result">$ 28/05/2024  10:27                76 .gitconfig</div> 
                <div class="result">$ 27/05/2024  10:38    &lt;DIR&gt;          .gradle</div> 
                <div class="result">$ 27/05/2024  21:50    &lt;DIR&gt;         .vscode</div> 
                <div class="result">$ 27/05/2024  19:24    &lt;DIR&gt;          Saved Games</div> 
                <div class="result">$ 27/05/2024  12:31    &lt;DIR&gt;          OneDrive</div>
                <div class="result">$ 2 arquivo(s)            197 bytes</div>
                <div class="result">$  14 pasta(s)   319.216.332.800 bytes disponíveis</div> 
            `;
            break;
        case 'login.php':
            window.location.href = "./login.php";
            break;
        case 'criar.php':
            window.location.href = "./criar.php";
            break;
        case 'clear':
            outputDiv.innerHTML = '';
            break;
        default:
            resultElement.textContent = `'${command}' não é reconhecido como um comando interno ou  um programa operável ou um arquivo em lotes`;
    }

    outputDiv.appendChild(resultElement);
    outputDiv.scrollTop = outputDiv.scrollHeight;
    commandInput.focus();
}