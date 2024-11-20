# Projeto de Autenticação e Cadastro

Este projeto consiste em um sistema simples de Login, Cadastro e HomePage, com as funcionalidades de validação de campos obrigatórios, validação de senha e armazenamento dos dados do usuário usando o `localStorage`. A aplicação é composta por três páginas principais: **Login**, **Cadastro** e **HomePage**.

## Funcionalidades

- **Página de Cadastro**:
  - Validação de campos obrigatórios.
  - Validação da senha: A senha deve ter, no mínimo, 8 caracteres, incluindo letras e números.
  - Armazenamento dos dados no `localStorage` para persistência.

- **Página de Login**:
  - Validação dos dados inseridos pelo usuário.
  - Verificação do login utilizando os dados salvos no `localStorage`.
  - Caso os dados estejam corretos, o usuário é redirecionado para a página HomePage.

- **Página HomePage**:
  - Página inicial do usuário após login bem-sucedido.
