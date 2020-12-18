# challenge-dm

Aplicação que retorna possíveis receitas dado os ingredientes recebidos.

## Backend - Node.js (Typescript)

### Features

    * Utilização de alguns princípios de DDD, SOLID e Clean Arquitecture
    * Criação de containers de bancos de dados com Docker.
    * Estilização e padronização do código com EditorConfig, TSLint e Prettier.
    * Gerenciamento de rotas com Express.
    * Testes unitários com Jest.

### Instalação de requisitos
1. [Node](https://nodejs.org/en/download/package-manager/) &rarr; recomendo a instalação via package manager.
2. [Yarn](https://yarnpkg.com/lang/en/)(opcional) &rarr; gerenciador de pacotes.
3. [Docker](https://www.docker.com/get-started) &rarr; usado para a criação dos containers.

### Variaveis de ambiente

Crie seu arquivo ```.env``` na raiz pois temos que inserir algumas chaves.

Iremos usar estas credenciais:

```
API_RECIPE_PUPPY_URL=http://www.recipepuppy.com/api/
API_GIPHY_URL=http://api.giphy.com/v1/gifs/search
API_GIPHY_KEY= (esta chave terá que ser gerada pelo site do GIPHY)
```
### Rota

Exemplo:

localhost:3001/recipes/?i=onions,tomato

## Subindo a aplicação local

### Preparando a aplicação

> os comandos à seguir deverão ser executados à partir da raiz do projeto.

Instale os pacotes:
```shell
    $ yarn
```

### Executando a aplicação

Inicie a aplicação:
```shell
    $ yarn start
```

### Testes

Para executar os testes unitários execute o comando:
```shell
    $ yarn test
```

### À evoluir

* Testes de integração
* Documentação do endpoint com Swagger.
