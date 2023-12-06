# Openai Api 
```json
{
    "message": "Welcome to OpenAi API!",
    "repository": "https://github.com/Odisseu93/openai-api"
}
```
Back end criado para fazer integração com a API da [openai](https://openai.com/)

## Services disponíveis
- :pushpin: [Gerador de descrição de produtos](#product-description-generator)

## variáveis de ambiente
| nome | tipo |
| ---- | ---- |
| PORT | number |
| OPENAI_API_KEY | string |

## Rodar localmente
1. Clone este repositório em seu ambiente local:

```bash
git clone https://openai-api.git
```
---
2. Navegue até o diretório do projeto 

```bash
cd openai-api
```
---
3. Instale as dependências  

```bash
yarn install
```
---
4. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias. Consulte a seção de [variáveis de ambiente](#variáveis-de-ambiente) para obter mais informações sobre as variáveis necessárias.
---
5. Rode o servidor localmente
```bash
yarn dev 
```
---
---
## <a id="product-description-generator"></a> Gerador de descricao de produtos
### Como usar :grey_question::
- endpoint
```
/generate/product-description
```
- tipo **POST**
- request body (parâmetros)

| nome | tipo |
| ---- | ---- |
| name | string |
| category | string |
| additionalInformation (opcional) | string |

### Reponses
- **200**
```json
{
    "message": "Product description generated successfully!",
    "description": "content..."
}
```

- **400**
```json
{
    "message": "The name and category are required!",
}

```
- **500**
```json
{
    "message": "Some unknown error...",
}
```


## Desenvolvedor/Autor

<div align="center">
  <img src="https://user-images.githubusercontent.com/76600539/235897309-88ab21df-d0be-4905-829c-36ab68ebc2e8.png" alt="developer: Ulisses Silvério"    width="200px" align="center"/>
</div>
<br>
<div align="center" margin="50px">
 <a href="https://ulisses.tec.br" align="center">
  <b>Ulisses Silvério</b>
</a>
</div>
