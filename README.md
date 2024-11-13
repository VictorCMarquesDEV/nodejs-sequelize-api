
# Sequelize API

Este repositório contém o código fonte da API "Sequelize", desenvolvido em Node.JS. A API permite criar, editar, remover e buscar usuários e vagas.

### Tecnologias Utilizadas

* Node.JS: Ambiente de execução do código JavaScript do lado servidor (server side), que na prática se reflete na possibilidade de criar aplicações standalone (autossuficientes) em uma máquina servidora, sem a necessidade do navegador.
* Express.JS: Framework para Node.js que fornece recursos mínimos para construção de servidores web.
* Postman: O Postman permite enviar solicitações HTTP (como GET, POST, PUT, DELETE) para testar e validar o comportamento das APIs.
* Sequelize: Um dos ORMs mais populares para Node.js, com suporte para bancos como MySQL, PostgreSQL, SQLite e MSSQL. Ele fornece uma ampla gama de recursos, incluindo suporte para operações CRUD, transações e relacionamentos complexos.

### Pré-requisitos
* Node.js e npm: Instale as últimas versões em https://nodejs.org/.
* Postman: Instale as últimas versões em https://www.postman.com/downloads/.

### Instalação
Clone o repositório:
```
git clone https://github.com/VictorCMarquesDEV/nodejs-sequelize-api.git
```


Instale as dependências:
```
cd nodejs-sequelize-api
```
```
npm install
```

### Execução
Inicie o servidor de desenvolvimento:
```
npm start
```

### Visualização e Manipulação de Dados
* Abra o Postman.
* Clique em New no canto superior esquerdo.
* Clique em HTTP.
* Coloque alguma das URLs abaixo
```
http://localhost:3000/api/usuarios
```
```
http://localhost:3000/api/vagas
```
* Escolha o método que desejar - GET, POST, PUT ou DELETE.

### Estrutura do Projeto
* config: Configuração do Sequelize e do banco de dados SQLite.
* models: Contém o modelo dos Alunos e Vagas.
* repositories: Contém o repositório dos Alunos e Vagas, além das operações CRUD - Create, Read, Update e Delete - responsáveis por manipular os dados do servidor local.
* routes: Rotas para o CRUD de Usuários e Vagas.
* server.js: Arquivo principal da aplicação que inicia o servidor.

# Use o código com cuidado!
