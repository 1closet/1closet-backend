# 1Closet Backend

Este é o backend do projeto **1Closet**, uma plataforma de eCommerce que oferece recomendações de produtos com base na coloração pessoal dos usuários. Este repositório contém o código-fonte da API, desenvolvida em Node.js com Express, utilizando Sequelize como ORM e PostgreSQL como banco de dados relacional.

## Índice

- [Visão Geral do Projeto](#visão-geral-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Modelos de Banco de Dados](#modelos-de-banco-de-dados)
- [Instalação e Configuração](#instalação-e-configuração)
- [Executando a Aplicação](#executando-a-aplicação)
- [Rotas da API](#rotas-da-api)
  - [Usuários](#usuários)
  - [Produtos](#produtos)
  - [Recomendações](#recomendações)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Visão Geral do Projeto

O **1Closet** é uma plataforma inovadora que ajuda os usuários a encontrar produtos que harmonizam com sua coloração pessoal, com base na teoria das estações. A API foi desenvolvida para gerenciar usuários, produtos e recomendações, seguindo uma arquitetura modular e escalável que facilita a manutenção e futuras expansões.

## Estrutura do Projeto

A organização modular deste projeto visa garantir a escalabilidade e facilitar a manutenção do código:

```
1closet-backend/
├── src/
│   ├── adapters/
│   │   ├── routes/                # Definição das rotas da API
│   │   │   ├── userRoutes.js      # Rotas de Usuários
│   │   │   ├── productRoutes.js   # Rotas de Produtos
│   │   │   ├── recommendationRoutes.js # Rotas de Recomendações
│   │   ├── database/              # Configuração do banco de dados
│   │   │   ├── models/            # Modelos do Sequelize
│   │   │   │   ├── User.js        # Modelo de Usuário
│   │   │   │   ├── Product.js     # Modelo de Produto
│   │   │   │   ├── Recommendation.js # Modelo de Recomendação
│   │   ├── controllers/           # Lógica dos controladores da API
│   │   │   ├── userController.js  # Controlador de Usuários
│   │   │   ├── productController.js # Controlador de Produtos
│   │   │   ├── recommendationController.js # Controlador de Recomendações
│   ├── config/
│   │   ├── database.js            # Configuração de conexão com o banco de dados
│   ├── app/                       # Inicialização da aplicação Express
│   │   ├── app.js                 # Configuração principal da aplicação Express
│   ├── middlewares/               # Middlewares utilizados na aplicação
│   │   ├── authMiddleware.js      # Middleware de autenticação JWT
│
├── .env                           # Variáveis de ambiente
├── package.json                   # Dependências e scripts npm
└── README.md                      # Documentação do projeto
```

## Modelos de Banco de Dados

### Estrutura das Tabelas

O banco de dados do **1Closet** é composto por três tabelas principais: **Usuários**, **Produtos** e **Recomendações**.

- **Usuário (`User`)**:
  - `id`: Identificador único (PK).
  - `name`: Nome do usuário.
  - `email`: Email do usuário.
  - `password`: Senha criptografada.
  - `station`: Estação de coloração (ex: "Summer", "Winter").

- **Produto (`Product`)**:
  - `id`: Identificador único (PK).
  - `name`: Nome do produto.
  - `description`: Descrição do produto.
  - `color`: Cor principal do produto (ex: "#0000FF").
  - `station_match`: Estação de coloração associada.
  - `image_url`: URL da imagem do produto.
  - `store_url`: URL da loja de compra.

- **Recomendação (`Recommendation`)**:
  - `id`: Identificador único (PK).
  - `userId`: Referência ao usuário (FK).
  - `productId`: Referência ao produto (FK).

### Exemplo de Modelo (Product)

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    station_match: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    store_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: true,
});

module.exports = Product;
```

## Instalação e Configuração

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **PostgreSQL**
- **Git**

### Passos para Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/1closet/1closet-backend.git
   cd 1closet-backend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configuração do Banco de Dados:**

   Certifique-se de que o PostgreSQL esteja instalado e rodando. Crie um banco de dados para o projeto.

4. **Configuração do `.env`:**

   Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente:

   ```bash
   DATABASE_URL=postgresql://<usuario>:<senha>@<host>:<porta>/<database>
   JWT_SECRET=sua_chave_secreta_jwt
   PORT=3000
   ```

5. **Sincronize o banco de dados:**

   ```bash
   npm run db:sync
   ```

## Executando a Aplicação

1. **Inicie o servidor:**

   ```bash
   npm start
   ```

   Ou, em modo de desenvolvimento com hot-reload:

   ```bash
   npm run dev
   ```

2. **Acesse o servidor:**

   - A aplicação estará disponível em `http://localhost:3000`.

## Rotas da API

### Usuários

- **Registro de Usuário:**

  ```
  POST /api/users/register
  ```

  Corpo da Requisição:

  ```json
  {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123",
      "station": "Summer"
  }
  ```

- **Login de Usuário:**

  ```
  POST /api/users/login
  ```

  Corpo da Requisição:

  ```json
  {
      "email": "john@example.com",
      "password": "password123"
  }
  ```

- **Obter Perfil do Usuário:**

  ```
  GET /api/users/profile
  ```

  Cabeçalho:

  ```
  Authorization: Bearer <token>
  ```

### Produtos

- **Adicionar Produto:**

  ```
  POST /api/products/add
  ```

  Corpo da Requisição:

  ```json
  {
      "name": "Blue Shirt",
      "price": 29.99,
      "color": "#0000FF",
      "description": "A stylish blue shirt for Summer",
      "station_match": "Summer",
      "image_url": "http://example.com/images/blue-shirt.jpg",
      "store_url": "http://example.com/store/blue-shirt"
  }
  ```

- **Obter Produto por ID:**

  ```
  GET /api/products/:id
  ```

- **Listar Todos os Produtos:**

  ```
  GET /api/products
  ```

### Recomendações

- **Adicionar Recomendação:**

  ```
  POST /api/recommendations/add
  ```

  Corpo da Requisição:

  ```json
  {
      "userId": 1,
      "productId": 2
  }
  ```

- **Obter Recomendações por Usuário:**

  ```
  GET /api/recommendations/:userId
  ```

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

