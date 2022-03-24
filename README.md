# 🏡 APImobiliária 🏡

## ✨ Sobre

Projeto desenvolvido para a conclusão do módulo 4 na Resilia Educação.

Para este projeto, foi proposto a criação de uma API de uma imobiliária, onde cada integrante do grupo ficou responsável por uma entidade.

Neste repositório se encontra a entidade de imóveis/property.

Nesta aplicação é possível registrar, listar, atualizar e deletar imóveis.

## 💬 Rodando localmente

Clone o projeto

```bash
  git clone https://https://github.com/sabrinacouto/apimobiliaria.git
```

Entre no diretório do projeto

```bash
  cd apimobiliaria
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

Utilize Postman ou Insomnia para realizar
as requisições das rotas com a URL:

```endpoint
  http://localhost:3001/
```

**Para possuir registros no banco de dados, será necessário iniciar com a rota /property/register para registrar um novo imóvel**

### Heroku

Ou você pode testar as rotas da API através desse link:

https://api-imobiliaria-property.herokuapp.com/

## 💟 Documentação da API

Esta API segue o padrão REST e utiliza os verbos HTTP: GET, POST, PUT e DELETE.

### POST

#### A rota irá registrar um novo imóvel

```http
  /property/register
```

Será necessário enviar um body no formato **JSON** com os seguintes campos:

```json
{
  "title": "",
  "isActive": "",
  "state": "",
  "street": "",
  "city": "",
  "amountBedrooms": ,
  "amountBathrooms": ,
  "amountGarage": ,
  "valueCondominium": "",
  "iptu": "",
  "valueRental": "",
  "valueSell": "",
  "isSelling": "",
  "isRenting": "",
  "role": ""
}
```

**Observações importantes:**

- É obrigátorio preencher todos os campos.
- Os campos "isSelling" e "isRenting" devem ser booleanos. Preencha com "1" caso a informação for true, "0" caso for false.
- O campo "isActive", que define o status do imóvel, só pode ser preenchido com as seguintes opções: "ativado" ou "desativado".
- Os campos "amountBedrooms", "amountBathrooms" e "amountGarage" possuem um valor inteiro. Não os preencha como string.
- Os campos restantes deverão ser uma string.

**Exemplo:**

```json
{
  "title": "Apartamento grande para 2 famílias",
  "isActive": "ativado",
  "state": "RJ",
  "street": "Avenida Brasil",
  "city": "Rio de Janeiro",
  "amountBedrooms": 3,
  "amountBathrooms": 2,
  "amountGarage": 1,
  "valueCondominium": "R$ 700",
  "iptu": "R$ 125",
  "valueRental": "0",
  "valueSell": "R$ 600.000",
  "isSelling": "1",
  "isRenting": "0",
  "role": "Corretor"
}
```

### GET

#### A rota irá listar um imóvel registrado com base em seu ID.

```http
  /property/:id
```

### GET

#### A rota irá listar todos os imóveis registrados.

```http
  /property/
```

### DELETE

#### A rota vai deletar o imóvel com base em seu ID.

```http
  /property/:id
```

### PUT

#### A rota vai atualizar o imóvel com base no seu id

A rota deve atualizar o imóvel com as informações passadas no body da requisição.

```http
  /property/:id
```

## 💐 Dependências

```json
{
  "dependencies": {
    "bcrypt": "^5.0.1",
    "express": "^4.17.3",
    "sequelize": "^6.17.0",
    "sqlite3": "^5.0.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

## 🔮 Tecnologias utilizadas

<br>
<div align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="70" height="70">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" width="70" height="70"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" width="70" height="70" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="70" height="70" />
<br>
</div>
<br>

## 🪐 Developer 🪐

- [Sabrina Couto](https://github.com/sabrinacouto)
