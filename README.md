# API ServeRest Automation

Este projeto contém testes automatizados para a API ServeRest. Contem testes nas APIs de login e usuários.

## Sobre o Projeto

O projeto API ServeRest Automation foi desenvolvido para automaztizar testes de API, incluindo:

- Testes de Funcionalidade: Cobertura dos verbos HTTP (GET, POST, PUT, DELETE).
- Testes de Contrato: Validação do schema das respostas da API utilizando Joi.
- Testes de Autenticação: Verificação de acesso e restrições com e sem token de autorização.


## 🔄 Integração Contínua (CI/CD)
Este projeto utiliza GitHub Actions para automação do processo de Integração Contínua. A cada push ou pull request para a branch main, o fluxo de trabalho de CI é acionado para executar os seguintes passos:
Configuração do ambiente Node.js.

- Instalação das dependências do projeto.
- Execução de todos os testes de API em modo headless.
- Geração do relatório de testes com o Mochawesome.
- Publicação automática do relatório via GitHub Pages.

📊 O relatório da última execução na branch main está sempre disponível publicamente.


## 🚀 Tecnologias

- **[Cypress](https://www.cypress.io/)** – Framework de automação de testes.
- **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** – Linguagem de programação utilizada na escrita dos testes.  
- **[Node.js](https://nodejs.org/)** – Ambiente de execução do JavaScript.  
- **[Mochawesome](https://github.com/adamgruber/mochawesome)** – Reporter para gerar relatórios em HTML, facilitando a análise dos resultados.  
- **[NPM](https://www.npmjs.com/)** – Gerenciador de pacotes do Node.js.  
- **[@faker-js/faker](https://github.com/faker-js/faker)** – Biblioteca para gerar dados dinâmicos.
- **[joi](https://joi.dev/)** – Biblioteca de validação de esquemas/contratos de resposta da API.  
- **[Mocha](https://mochajs.org/)** & **[Chai](https://www.chaijs.com/)** – Framework e biblioteca de asserções. 


## ✅ Pré-requisitos

- **[Node.js](https://nodejs.org/en/download/prebuilt-installer)** - (Versão 20 ou superior)



## ⚙️ Configuração do Ambiente

1. Clone o repositório:

git clone [https://github.com/leticiarijo/api-serverest-automation.git](https://github.com/leticiarijo/api-serverest-automation.git)

2. Instalar as dependencias:
```bash
npm install
```


## ⚡ Execução dos Testes

Para executar o projeto de modo interativa, execute o seguinte comando no terminal:
```bash
npx cypress open 
```

Para executar o projeto em modo headless, execute o seguinte comando no terminal:
```bash
npx cypress run
```

##  📊 Visualizando os Relatórios
Após executar os testes em modo headless, o relatório em HTML do Mochawesome será gerado na pasta mochawesome-report. Para visualizar, abra o arquivo mochawesome.html no seu navegador.

## Autor
Criador do projeto: Leticia Rijo
