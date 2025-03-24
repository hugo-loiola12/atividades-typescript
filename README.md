# CLI com Typescript

## 1 - Gerenciamento de Inventário (Memória)

Desenvolva uma aplicação de gerenciamento de inventário em linha de comando (CLI) utilizando TypeScript. O sistema deve permitir o gerenciamento de categorias e produtos, com **persistência em memória** (os dados existirão apenas durante a execução do
programa).

### Dados Mínimos

| **Categoria**         | **Produto**               |
|------------------------|---------------------------|
| `id: number`           | `id: number`              |
| `nome: string`         | `nome: string`            |
| `descricao: string`    | `descricao: string`       |
| `dataCriacao: Date`    | `preco: number`           |
|                        | `quantidade: number`      |
|                        | `categoriaId: number`     |
|                        | `dataCriacao: Date`       |
|                        | `dataAtualizacao: Date`   |


### Funcionalidades Principais

**Gestão de Categorias**

- Criar categoria: Adicionar nova categoria ao sistema
- Listar categorias: Exibir todas as categorias cadastradas
- Buscar categoria: Encontrar categoria por id ou nome
- Atualizar categoria: Modificar informações de uma categoria existente
- Remover categoria: Excluir categoria do sistema (com validação para não remover categorias com produtos associados)

**Gestão de Produtos**

- Criar produto: Adicionar novo produto ao sistema (associado a uma categoria existente)
- Listar produtos: Exibir todos os produtos cadastrados
- Buscar produto: Encontrar produto por id, nome ou categoria
- Atualizar produto: Modificar informações de um produto existente
- Remover produto: Excluir produto do sistema

### Interface de Linha de Comando

- Menu Principal: Interface que permite navegar entre as operações de gestão de produtos e categorias
- Entrada de Dados: Sistema para capturar enrtadas do usuário de forma segura
- Formatação de Saída: Apresentação de dados de forma organizada e legível (ex: tabular)

### Validações:

- Validar entradas do usuário
- Garantir a "integridade referencial" entre produtos e categorias
- Prevenir operações inválidas (ex: remover categoria com produtos vinculados)
- Gerenciamento de Erros: Implementar tratamento adequado de exceções e erros

## Requisitos Técnicos (check list com exemplos aplicados)
- [ ] TypeScript: Utilizar TypeScript com tipagem adequada para todas as estruturas e funções
- [ ] Modularização: Organizar o código usando princípios de modularização e boas práticas de programação orientada a objetos
- [ ] Persistência em Memória: Implementar estruturas de dados para armazenar as informações durante a execução do programa
- [ ] Tipos básicos e anotações de tipo (number, string, boolean, null, undefined, void, any.)
- [ ] Tipos condicionais, intersection types e union types.
- [ ] Interfaces e tipos personalizados (type vs interface)
- [ ] Crie interfaces para definir contratos de objetos. (adicione propriedades opcionais)
- [ ] Funções em TypeScript (declaração, parâmetros tipados, tipos de retorno, parâmetros opcionais)
- [ ] Classes, Herança e modificadores de acesso (public, private, protected)
- [ ] Generics
- [ ] Enums e Mapeamento de Valores
- [ ] Realize alguma configuração no arquivo tsconfig.json (e comente no próprio arquivo a configuração realizada).
