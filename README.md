# Talker Manager

<details>
  <summary markdown="span"><strong>:us: English</strong></summary><br />
  
## :page_with_curl: About

This is the fourth project of the Back-end curriculum developed at Trybe.

In this project I built an application for registering speakers in which it will be possible to register, view, search, edit and delete information

<br />

## 🚀 Installation

<details>
<summary>Installation and execution with Docker</summary>
<br />

To run this application you need to have **Git**, **Docker** and **Docker Compose** installed on your computer. Docker Compose needs to be version **1.29** or higher.

### 1 - Clone the repository:

```
git clone git@github.com:apoishi/trybe-talker-manager.git
```

### 2 - Enter the repository folder you just cloned and use docker-compose to create the container:

     cd trybe-talker-manager  

     docker-compose up -d --build

### 3 - Open the `talker_manager` container terminal:

     docker exec -it talker_manager bash

### 4 - In the terminal of the container, install the dependencies:

     npm install

### 5 - Now run the application with the command:

     npm start

</details>
<br />

## :man_technologist: Skills

- Understand the difference between synchronous and asynchronous execution;
- Perform asynchronous operations with callbacks and Promises;
- Read and write files locally with NodeJS;
- Write scripts that create and consume Promises;
- Perform function calls consciously;
- Understand what HTTP is, what an API is and what both have to do with Express;
- Understand the structure of an Express application and how to organize its code;
- Create routes and apply middlewares;
- Write APIs using Node and Express.

<br />

## Routes

<details>
   <summary><strong>GET /talkers</strong></summary>
   </br>
   • Return all speakers from the database.
   </br>
</details>

<details>
   <summary><strong>GET /talkers/search</strong></summary>
   </br>
   • Search a speaker by name.
   </br>
</details>

<details>
   <summary><strong>GET /talkers/:id</strong></summary>
   </br>
   • Search a speaker by id in the database.
   </br>
</details>

<details>
   <summary><strong>POST /login</strong></summary>
   </br>
   • If the login was successful, it returns a token to the user.
</details>

<details>
   <summary><strong>POST /talkers</strong></summary>
   </br>
   • Register a new speaker.
   </br>
   • Validate the token.
</details>

<details>
   <summary><strong>PUT /talkers/:id</strong></summary>
   </br>
   • Update a speaker by id in the database.
   </br>
   • Validate the token.
</details>

<details>
   <summary><strong>DELETE /talkers/:id</strong></summary>
    </br>
   • Delete a speaker by id from the database.
   </br>
   • Validate the token.
</details>

<br />

## :hammer_and_wrench: Tools

* Node.js
* Express.js
* Docker

</details>

<details>
  <summary markdown="span"><strong>:brazil: Português</strong></summary><br />
  
## :page_with_curl: Sobre

Esse é o quarto projeto desenvolvido na Trybe do módulo de Back-end.

Neste projeto construí uma aplicação de cadastro de palestrantes em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações. 
<br />

## 🚀 Instalação

<details>
<summary>Instalação e execução com Docker</summary>
<br />

Para rodar está aplicação é necessário ter **Git**, **Docker** e o **Docker Compose** instalados no seu computador. O Docker Compose precisa estar na versão **1.29** ou superior.

### 1 - Clone o repositório:

```
git clone git@github.com:apoishi/trybe-talker-manager.git
```

### 2 - Entre na pasta do repositório que você acabou de clonar e use o docker-compose para subir o container:

    cd trybe-talker-manager   
    docker-compose up -d --build

### 3 - Abra o terminal do container `talker_manager`

    docker exec -it talker_manager bash

### 4 - No terminal do container, instale as dependências:

    npm install

### 5 - Agora execute a aplicação com o comando:

    npm start

</details>
<br />

## :man_technologist: Habilidades

- Entender a diferença entre execução síncrona e assíncrona;
- Realizar operações assíncronas com callbacks e Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever os próprios scripts que criam e consomem Promises;
- Realizar chamadas de funções de forma consciente;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares;
- Escrever APIs utilizando Node e Express.

<br />

## Rotas

<details>
  <summary><strong>GET /talkers</strong></summary>
  </br>
  • Retorna todos os palestrantes do banco de dados.
  </br>
</details>

<details>
  <summary><strong>GET /talkers/search</strong></summary>
  </br>
  • Busca o palestrante pelo nome.
  </br>
</details>

<details>
  <summary><strong>GET /talkers/:id</strong></summary>
  </br>
  • Busca o palestrante por id no banco de dados.
  </br>
</details>

<details>
  <summary><strong>POST /login</strong></summary>
  </br>
  • Caso o login tenha sido efetuado com sucesso retorna um token para o usuário.
</details>

<details>
  <summary><strong>POST /talkers</strong></summary>
  </br>
  • Cadastra um novo palestrante.
  </br>
  • Valida o token.
</details>

<details>
  <summary><strong>PUT /talkers/:id</strong></summary>
  </br>
  • Atualiza um palestrante pelo id no banco de dados.
  </br>
  • Valida o token.
</details>

<details>
  <summary><strong>DELETE /talkers/:id</strong></summary>
   </br>
  • Deleta um palestrante por id no banco de dados.
  </br>
  • Valida o token.
</details>

<br />

## :hammer_and_wrench: Ferramentas

* Node.js
* Express.js
* Docker
* Javascript

</details>
