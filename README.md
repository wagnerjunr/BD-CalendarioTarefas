# Calendário de Tarefas - Backend

Este repositório contém o backend para o "Calendário de Tarefas", uma aplicação para gerenciamento de tarefas diárias integrado a um calendário. Este backend fornece APIs REST para interação com o banco de dados de tarefas.

## Tecnologias Utilizadas

- Node.js
- Express para criação do servidor
- Mongoose para modelagem de dados com MongoDB
- Dotenv para gerenciamento de variáveis de ambiente
- CORS para permitir acesso cross-origin

## Instalação

### Pré-requisitos

Antes de começar, você precisará ter o Node.js instalado em sua máquina. Caso não tenha, você pode instalar a partir do [site oficial do Node.js](https://nodejs.org/).

### Clonar o repositório

Primeiramente, clone o repositório do backend em sua máquina local usando:

```bash
git clone https://github.com/seu-usuario/seu-repositorio-backend.git
cd seu-repositorio-backend
```

### Instalar dependências

Dentro do diretório do projeto, execute o seguinte comando para instalar todas as dependências necessárias:

```bash
npm install
```

### Executar o servidor

Para iniciar o servidor, utilize:

```bash
node index.js
```

Este comando inicia o servidor de backend, geralmente acessível em `http://localhost:4000`.

## Estrutura de Arquivos

- `index.js`: Ponto de entrada do servidor, configuração do Express e rotas.
- `models/`: Contém os modelos Mongoose para as coleções do MongoDB.
- `routes/`: Diretório com os arquivos de rotas para diferentes recursos da API.

## Contribuir

Contribuições para o projeto são bem-vindas! Sinta-se à vontade para criar issues ou pull requests para discutir bugs, características e melhorias.

## Licença

Este projeto está licenciado sob a Licença ISC.

## Autor

- Wagner Junior (https://github.com/wagnerjunr)
