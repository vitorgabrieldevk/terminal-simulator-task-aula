# 💻 Terminal.exe 

**Este projeto consiste em um simulador de terminal funcional em JavaScript, permitindo aos usuários executar comandos como criar contas, fazer login, gerenciar arquivos, simular comandos básicos do sistema e interagir com o simulador de forma intuitiva.**

### 2. Funcionalidades

**Criação e gerenciamento de contas:**
  - Os usuários podem criar novas contas com nome, senha e e-mail.
  - As informações da conta são armazenadas em uma estrutura de banco Mysql.

**Login e autenticação:**
  - Os usuários podem fazer login usando seus dados de conta.
  - A autenticação é validada para garantir a segurança.
    
**Simulação de comandos básicos do sistema:**
  - O simulador oferece comandos como clima, dir, cd, etc, para navegar na estrutura de diretórios.
  - A simulação exibe o conteúdo dos diretórios e simula a interação com o sistema.
  - Comandos adicionais:
      - Além dos comandos básicos, o simulador pode oferecer funcionalidades extras, como:
          - Exibir informações da conta do usuário.
          - Sair da conta do usuário.


### 3. Tecnologias Utilizadas

**JavaScript:** Linguagem principal para desenvolvimento do simulador.

**Estrutura de dados:** Banco de dados construido em Mysql.

**Interface de usuário:** Simulação de interface de terminal com prompt, entrada do usuário e saída formatada.


### 4. Instalação e Execução

**4.1 Pré-requisitos:**
  - Apache
      - php >7.4 e  <=8.1
  - Servidor Mysql

**4.2 Clonando o Repositório:**

``` Bash
  git clone https://github.com/vitorgabrieldevk/terminal-simulator-task-aula
  cd terminal-simulator-task-aula
```

4.3 Execução:

Bash
node index.js
Use o código com cuidado.
content_copy
5. Uso do Simulador

Ao iniciar o simulador, você verá um prompt de comando.
Digite comandos como criarConta, fazerLogin, dir, ls, cd, pwd, etc.
Siga as instruções na tela para interagir com o simulador.
6. Documentação Detalhada

6.1 Arquivos:

index.js: Arquivo principal do simulador, contendo a lógica principal e a interface de usuário.
utils.js: Módulo contendo funções utilitárias para manipulação de dados e formatação de saída.
accounts.js: Módulo responsável pela gestão de contas de usuário, incluindo criação, login, edição e exclusão.
commands.js: Módulo responsável pela implementação dos comandos simulados, como dir, ls, cd, pwd e outros.
README.md: Este arquivo de documentação.
6.2 Estrutura de Diretórios:

simulador-terminal-js
├── accounts.js
├── commands.js
├── index.js
├── README.md
└── utils.js
6.3 Funcionalidades dos Módulos:

accounts.js:
Armazena informações de contas em um array de objetos.
Oferece funções para:
Criar nova conta.
Fazer login.
Editar informações da conta.
Excluir conta.
Verificar se o usuário está logado.
Obter informações da conta do usuário logado.
commands.js:
Implementa os comandos simulados.
Utiliza funções do módulo utils.js para manipulação de dados e formatação de saída.
Oferece funções para:
Listar arquivos e pastas do diretório atual (dir, ls).
Mudar de diretório (cd).
Exibir o caminho do diretório atual (pwd).
Executar scripts JavaScript personalizados.
utils.js:
Contém funções utilitárias para:
Formatar data e hora.
Verificar se um diretório existe.
Criar um diretório.
Ler o conteúdo de um diretório.
Executar um script JavaScript.
7. Exemplos de Uso

Criar uma nova conta:
> criarConta
Nome: João da Silva
Senha: 
