# 💻 Terminal.exe 

**Este projeto consiste em um simulador de terminal funcional em JavaScript, permitindo aos usuários executar comandos como criar contas, fazer login, gerenciar arquivos, simular comandos básicos do sistema e interagir com o simulador de forma intuitiva.**

#

### 2. Funcionalidades

**Criação e gerenciamento de contas:**
  - Os usuários podem criar novas contas com nome, senha e e-mail e tipo de usuário.
  - As informações da conta são armazenadas em uma estrutura de banco Mysql.

**Login e autenticação:**
  - Os usuários podem fazer login usando seus dados de conta.
  - A autenticação é validada para garantir a segurança.
  - As senha são criptografadas usando o método bcrypt, usando um algoritmo forte de hash de mão única.
    
**Simulação de comandos básicos do sistema:**
  - O simulador oferece comandos como clima e dir para navegar na estrutura de diretórios simulada.

#

### 3. Tecnologias Utilizadas

**JavaScript:** Linguagem principal para desenvolvimento do front e tratamento das requisições.

**php:** Linguagem principal do back-end, consultas e atualizações no banco.

**Mysql:** Banco de dados construido para armazenar dados dos usuários e horários dos registros e logins.

**Css:** Estilização do projeto.

**Html:** Estrutura do projeto.

#

### 4. Instalação e Execução

**4.1 Pré-requisitos:**
  - Apache
      - php >7.4 e  <=8.1
  - Servidor Mysql

#

**4.2 Clonando o Repositório:**

``` Bash
  git clone https://github.com/vitorgabrieldevk/terminal-simulator-task-aula
  cd terminal-simulator-task-aula
```

#

**4.3 Execução:**

Importante! 

``` bash 
  Inicialize o serviço 'apache' e o servidor local 'Mysql'
  Crie um banco com o nome 'terminal.exe', e importe o dump localizado em 'database/Dump.sql'
```

``` bash
  Abra o navegador, e digite localhost, e abra a pasta 'terminal-simulator-task-aula'
```

#

**5. Uso do Simulador:**

**Ao iniciar o simulador, você verá um prompt de comando.
Digite comandos como login, criar, clima [cidade], dir.**
