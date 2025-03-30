*📋 Descrição* 
Este projeto é um sistema de gerenciamento de categorias e produtos desenvolvido em TypeScript, utilizando:

TypeORM para acesso ao banco de dados

Express para a API REST

Inquirer para a interface de linha de comando (CLI)

# ⚙️ Pré-requisitos:

- Node.js (versão 16 ou superior)

- npm (geralmente vem com o Node.js)

- Banco de dados PostgreSQL instalado e configurado

# 🛠️ Instalação
Clone o repositório

- git clone [URL_DO_REPOSITORIO]
- cd projeto2

# 🛠️ Instale as dependências

- [npm install]

# Configure o banco de dados

- Crie um banco de dados PostgreSQL
- Configure as credenciais no arquivo src/database/AppDataSource.ts

# 🏗️ Compilação
- Para compilar o TypeScript para JavaScript:
- npm run build
# O código compilado será gerado na pasta dist/.

# ▶️ Execução

- Opção 1: Interface de Linha de Comando (CLI)

- [npm run cli]

- Opção 2: Servidor API REST

- npm start

# A API estará disponível em http://localhost:3000

📝 Comandos Disponíveis (CLI)

## -- Listar categorias - Mostra todas as categorias cadastradas

## -- Criar categoria - Adiciona uma nova categoria

## -- Deletar categoria - Remove uma categoria e seus produtos associados

## -- Listar produtos - Mostra todos os produtos cadastrados

## -- Criar produto - Adiciona um novo produto

## -- Deletar produto - Remove um produto específico

# 🧪 Testes
- Para executar os testes (se houver):

- npm test

# 🐛 Solução de Problemas
- Se encontrar erros:

- Verifique se o banco de dados está rodando

- Confira as credenciais no AppDataSource.ts

- Execute npm install novamente se houver problemas com dependências

# 📦 Estrutura do Projeto

src/
├── controllers/    # Controladores da aplicação
├── entities/       # Entidades do banco de dados
├── database/       # Configuração do banco de dados
├── cli.ts          # Interface de linha de comando
└── server.ts       # Servidor API

**Equipe:** João Gabriel Leite Neirelli, Gustavo Brandão Farias

**Orientador:** Prof. Weldes Lima Oliveira

# 📄 Licença

MIT License 

Copyright (c) 2025 João Gabriel Leite Neirelli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 