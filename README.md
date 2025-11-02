# Bagde API

API desenvolvida com Node.js, TypeScript, Express e Sequelize.

## 🛠️ Stack Tecnológica

### Core

- **Node.js**: v22.x
- **TypeScript**: v5.2.2
- **Express**: v4.18.2
- **Sequelize**: v6.35.0 (ORM)
- **Yarn**: v4.5.2 (gerenciador de pacotes)

### Banco de Dados

- **PostgreSQL** / **MySQL**: Suporte multiplataforma via Sequelize

## 📁 Estrutura do Projeto

```
projeto/
├── src/
│   ├── @types/               # Definições de tipos TypeScript
│   │   └── express.d.ts
│   ├── config/
│   │   ├── database/
│   │   │   └── index.ts      # Configuração Sequelize
│   │   ├── routes/           # Rotas da API
│   │   └── utils/            # Funções auxiliares
│   ├── controllers/          # Lógica de negócio
│   ├── models/               # Modelos Sequelize
│   ├── middlewares/          # Middlewares customizados
│   ├── errors/               # Classes de erro customizadas
│   ├── index.ts              # Entry point
│   └── swagger.js            # Documentação Swagger
├── build/                    # Compilação TypeScript
├── .editorconfig
├── .eslintrc.json
├── .eslintignore
├── .gitignore
├── .prettierrc
├── .prettierignore
├── .yarnrc.yml
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   yarn install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env_example .env
   ```
   Edite o arquivo `.env` com suas configurações de banco de dados.

4. Execute o servidor em modo de desenvolvimento:
   ```bash
   yarn dev
   ```

## 📝 Modelos

### User

Modelo básico de usuário com:
- `id`: Identificador único (auto-incremento)
- `email`: Email do usuário (único, validado)
- `name`: Nome do usuário

## 🔧 Scripts

- `yarn dev`: Inicia o servidor em modo desenvolvimento
- `yarn build`: Compila o TypeScript para JavaScript
- `yarn start`: Inicia o servidor compilado

## 📄 Licença

ISC

