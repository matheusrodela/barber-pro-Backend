# Customer management system for barbershop owners

This is a backend project in Node.js and TypeScript for a customer management system that allows users to create an account and log in, create and delete haircut options with their respective prices, create a queue of users registering their services and prices, perform service completion with payment, and choose to be premium to have access to exclusive features.

## Technologies used:
Node.js;
TypeScript;
Express;
CORS;
PostgreSQL;
Beekeeper Studio;

## Dependencies used:
yarn;
ts-node-dev;
express-async-errors;
@types/cors;
Prisma;
Bcryptjs;
@types/bcryptjs;
Jsonwebtoken;
@types/jsonwebtoken;
Prettier;
ESLint;
Insomnia;

## How to run the project
Prerequisites
Before you start, you need to have installed on your machine:

Node.js
Yarn
PostgreSQL
Beekeeper Studio

## Installing dependencies
To install each of the project's dependencies using the Yarn package manager, follow these steps:

Open the terminal in the project's folder and run the command:
    npm install -g yarn
    
 Wait for the installation to finish and then run:
    yarn add ts-node-dev express-async-errors @types/cors prisma bcryptjs @types/bcryptjs jsonwebtoken @types/jsonwebtoken prettier -D eslint -D
    
 Wait for all dependencies to be installed. Yarn will display a list of the installed packages.
Done! Now the project's dependencies are installed, and you can run the application.

## Database Configuration
The project uses PostgreSQL as a database and Beekeeper Studio as an SQL editor. Make sure you have PostgreSQL installed on your machine and create a database named "barber."

Then, create a .env file in the root of the project with the following content:
     DATABASE_URL="postgresql://your_user:password@localhost:5432/barber?schema=public"
    JWT_SECRET="your_secre-key"
 
Replace your_user and your_password with your PostgreSQL credentials and choose a your_secret_key for JWT.

## Running the project
To start the server, run the following command in the terminal:
    yarn dev
    
The server will be available at http://localhost:3333.

## Testing the project
The project can be tested using Insomnia, which allows you to test the application's routes.

## Contributing
Contributions are always welcome! If you want to contribute to the project, follow the instructions below:

Fork the repository
Create a branch with your feature or bug fix: git checkout -b my-feature
Commit your changes: git commit -m 'Adding new feature'
Push to the branch: git push origin my-feature
Open a Pull Request



### Pt - BR

# Sistema de gest??o de clientes para donos de barbearias

Este ?? um projeto de backend em Node.js e TypeScript para um sistema de gest??o de clientes que permite que os usu??rios criem uma conta e fa??am login, criem e apaguem op????es de cortes de cabelo com seus respectivos pre??os, criem uma fila de usu??rios registrando seus servi??os e pre??os, realizem a finaliza????o dos servi??os com pagamento e escolham ser premium para ter acesso a features exclusivas.

## Tecnologias utilizadas:

Node.js;
TypeScript;
Express;
CORS;
PostgreSQL;
Beekeeper Studio;

## Depend??ncias utilizadas:

yarn;
ts-node-dev;
express-async-errors;
@types/cors;
Prisma;
Bcryptjs;
@types/bcryptjs;
Jsonwebtoken;
@types/jsonwebtoken;
Prettier;
ESLint;
Insomnia;


## Como executar o projeto
Pr??-requisitos
Antes de come??ar, ?? necess??rio ter instalado em sua m??quina:

Node.js
Yarn
PostgreSQL
Beekeeper Studio

## Instala????o das depend??ncias
Para instalar cada uma das depend??ncias do projeto utilizando o gerenciador de pacotes Yarn, siga os seguintes passos:

Abra o terminal na pastra e execute o comando:

    npm install -g yarn

Espere finalizar e ent??o execute: 

    yarn add ts-node-dev express-async-errors @types/cors prisma bcryptjs @types/bcryptjs jsonwebtoken @types/jsonwebtoken prettier -D eslint -D

Aguarde at?? que todas as depend??ncias sejam instaladas. O Yarn ir?? mostrar uma lista dos pacotes instalados.
Pronto! Agora as depend??ncias do projeto est??o instaladas e voc?? pode executar a aplica????o.



## Configura????o do Banco de Dados
O projeto utiliza o PostgreSQL como banco de dados e o Beekeeper Studio como editor de SQL. Certifique-se de ter o PostgreSQL instalado em sua m??quina e de criar um banco de dados com o nome "barber".

Em seguida, crie um arquivo .env na raiz do projeto com o seguinte conte??do:

    DATABASE_URL="postgresql://seu_usuario:senha@localhost:5432/barber?schema=public"
    JWT_SECRET="sua_chave_secreta"
Substitua seu_usuario e senha pelas suas credenciais do PostgreSQL e escolha uma sua_chave_secreta para o JWT.

## Execu????o do projeto
Para iniciar o servidor, execute o seguinte comando no terminal:

    yarn dev
O servidor estar?? dispon??vel em http://localhost:3333.

## Testando o projeto
O projeto pode ser testado utilizando o Insomnia, que permite testar as rotas da aplica????o.

## Contribuindo
Contribui????es s??o sempre bem-vindas! Se voc?? quiser contribuir com o projeto, siga as instru????es abaixo:

Fa??a um fork do reposit??rio
Crie uma branch com sua feature ou corre????o de bug: git checkout -b minha-feature
Fa??a commit das suas altera????es: git commit -m 'Adicionando nova feature'
Fa??a push para a branch: git push origin minha-feature
Abra um Pull Request
