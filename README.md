# 🏡 APImobiliária 🏡

## ✨ Sobre

Projeto desenvolvido para a conclusão do módulo 4 na Resilia Educação.

Para este projeto, foi proposto a criação de uma API para o uso de uma imobiliária, onde cada integrante do grupo ficou responsável por uma entidade.

Neste repositório se encontra a entidade de imóveis/property.

Nesta aplicação é possível registrar, listar, atualizar e deletar imóveis.

## 🔮 Tecnologias utilizadas

<br>
<div align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="70" height="70">
<img src="https://symbols.getvecta.com/stencil_85/14_javascript-horizontal.33f06c2944.png"  width="70" height="70"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" width="70" height="70"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="70" height="70" />
<br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" width="70" height="70" />
</div>
<br>

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

## Documentação da API

Esta API segue o padrão REST e utiliza os verbos HTTP: GET, POST, PUT e DELETE.

### POST

####

```http
  /user
```

Cria e retorna um novo imóvel no banco de dados. Será necessário enviar um body no formato **JSON** com as seguintes informações:

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

## Developer

- [@SabrinaCouto](https://github.com/sabrinacouto)
