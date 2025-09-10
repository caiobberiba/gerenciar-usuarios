# Gerenciar Usuários

Este projeto foi desenvolvido como prática das aulas de Lógica e Programação com JavaScript da Mentoria em Testes de Software do Júlio de Lima, focando em conceitos fundamentais de manipulação de listas, funções de gerenciamento de usuários e testes unitários automatizados.

## Objetivo

Implementar e testar funções para gerenciar uma lista de usuários, incluindo:
- Adicionar novos usuários
- Retornar a lista atual de usuários

## Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js
- Mocha (framework de testes)
- Chai (biblioteca de asserções)

## Estrutura do Projeto

- `src/gerenciarUsuarios.js`: Funções principais para manipulação de usuários.
- `test/gerenciarUsuarios.test.js`: Testes automatizados para garantir o funcionamento correto das funções.
- `package.json`: Gerenciamento de dependências e scripts.
- `.gitignore`: Arquivos e pastas ignorados pelo Git.

## Como Executar

### Requisitos

- Node.js versão 18 ou superior recomendada

### Instalação

1. Instale as dependências:
   ```bash
   npm install
   ```

### Execução dos Testes

2. Execute todos os testes:
   ```bash
   npm test
   # ou
   npx mocha
   ```

3. Execute um teste específico:
   ```bash
   npx mocha test/gerenciarUsuarios.test.js
   ```

### Adicionando Novos Testes

Crie um novo arquivo na pasta `test/` com o sufixo `.test.js` e siga o padrão dos testes existentes usando Mocha e Chai.

### Interpretação dos Resultados

- **Pass:** Todos os testes passaram, indicando que as funções estão funcionando conforme esperado.
- **Fail:** Algum teste falhou, indicando que há um problema na implementação ou nos dados de entrada. Revise o erro apresentado para identificar e corrigir o problema.

## Aprendizados

- Prática de lógica de programação com manipulação de arrays e objetos.
- Escrita de testes automatizados com Mocha e Chai.
- Uso de versionamento com Git e GitHub.

## Autor

Caio Bêribá
