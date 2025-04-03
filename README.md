# CLI de Gerenciamento de Inventário em TypeScript

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Uma aplicação de linha de comando (CLI) para gerenciamento de inventário, desenvolvida em TypeScript, com persistência em memória. Projeto desenvolvido para a disciplina de Arquitetura de Software.

---

## 📋 Funcionalidades Principais

### **Gestão de Categorias**
- ✅ Criar novas categorias
- ✅ Listar todas as categorias
- 🔍 Buscar categorias por ID ou nome
- ✏️ Atualizar categorias existentes
- 🗑️ Remover categorias (com validação de produtos vinculados)

### **Gestão de Produtos**
- ✅ Criar novos produtos (vinculados a categorias)
- 📋 Listar todos os produtos
- 🔍 Buscar produtos por ID, nome ou categoria
- ✏️ Atualizar produtos existentes
- 🗑️ Remover produtos

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v18+)
- npm

### Passos Projeto 1:
```bash
# 1. Clonar o repositório
git clone https://github.com/hugo-loiola12/atividades-typescript.git

# 2. Acessar a pasta do projeto
cd projeto1

# 3. Instalar dependências
npm install

# 4. Compilar o TypeScript
npx tsc

# 5. Executar o programa
npm start
```

### Passos Projeto 2:
```bash
# 1. Clonar o repositório
git clone https://github.com/hugo-loiola12/atividades-typescript.git

# 2. Acessar a pasta do projeto
cd projeto2

# 3. Instalar dependências
npm install

# 4. Compilar o TypeScript
npx tsc

# 5. Iniciar o servidor
npm start

# 6. Iniciar o cliente
npm cli
```
## 🛠️ Tecnologias Utilizadas
- TypeScript (Tipagem estática e OOP)
- MySQL
- TypeORM

## 📂 Estrutura do Projeto 1
```
src/
├── entities/       # Entidades de domínio
│   ├── Categoria.ts
│   └── Produto.ts
├── repositories/   # Repositórios em memória
│   ├── CategoriaRepository.ts
│   └── ProdutoRepository.ts
├── cli/            # Lógica da interface
│   └── mainMenu.ts
└── index.ts        # Ponto de entrada
```

## 📂 Estrutura do Projeto 2
```
src/
├── controllers/    # Controladores da aplicação
│   ├── categoria.controller.ts
│   └── produto.controller.ts
├── database/
│   ├── AppDataSource.ts # Configuração do banco de dados
├── entities/       # Entidades de domínio
│   ├── Categoria.ts
│   └── Produto.ts
├── routes/        # Rotas da aplicação
│   ├── categoria.routes.ts
│   └── produto.routes.ts
├── cli.ts           # Lógica da interface
└── server.ts        # Servidor
```
## 🔧 Requisitos Técnicos Implementados
- [x] Tipos avançados (Union Types, Generics)
- [x] Interfaces para contratos de objetos
- [x] Classes com modificadores de acesso (public/private)
- [x] Configuração personalizada do tsconfig.json
- [x] Validação de integridade referencial
- [x] Tratamento de erros robusto

## 📌 Próximos Passos
- Migrar persistência para banco de dados SQLite
- Implementar relacionamentos via TypeORM
- Adicionar sistema de migrações
- Implementar queries complexas

---

### 📸 Captura de Tela do Sistema
![CLI Demo](projeto1/docs/example.gif) *Interface interativa do gerenciador de categorias*

---

**Equipe:** Hugo Loiola de Queiroz, Julia Carolline Fernandes Borges, Isabella Cardoso, João Gabriel Leite Neirelli, Gustavo Brandão

**Orientador:** Prof. Diego Dias Rodrigues

> Projeto desenvolvido como parte do curso de Engenharia de Software da Universidade Católica de Brasília (UCB)
