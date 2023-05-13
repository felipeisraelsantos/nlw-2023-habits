# Projeto Habits NLW 2023

## Pré-requisitos

- ### Node, e npm instalados.

Para verificar qual é a sua versão atual, basta rodar
```bash
npm -v 
```
no terminal. Na sequência, rode
```bash
npm install npm@latest –g
```
para instalar a versão mais recente (caso já não esteja usando-a) e “ npm –v ” novamente, para ter certeza de que a atualização deu certo.

- ### **Preparando Ambiente**

Primeiro passo é criar a pasta **server** com o comando caso você esteja usando linux ou windows coom wsl

```bash
mkdir server
```
Entre no diretório criado  pelo terminal com o comando

```bash
cd server/
```
Já dentro do diretório **server/** via terminal, execute o comando para a criação do arquivo **_package.json_** 

```bash
npm init -y
```

Também será uitilizado o **_fastify_**. Fastify é um framework web bem parecido com o express mas a inspiração do modelo de plug-ins veio do Hapi. O encapsulamento permite que cada plug-in use suas próprias dependências e hooks se houver necessidade, e esse comportamento possibilita maior reusabilidade de software.

execute o comando:
```bash
npm install fastify
``` 

dentro do diretório **server** crie uma pasta **src/** com um arquivo **server.ts** 

obs: 
>TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript. Ela adiciona recursos avançados ao JavaScript, como a tipagem estática e interfaces, tornando mais fácil detectar e prevenir erros durante a fase de desenvolvimento.

Para utilizar o typescript execute o comando

```bash
npm install typescript -D
```
Com isso se faz necessário a criação do arquivo **tsconfig.json**

>O arquivo *tsconfig.json* especifica os arquivos raiz e as configurações de compilação necessárias para o projeto. Projetos JavaScript podem ter um arquivo *jsconfig.json*, que tem quase o mesmo propósito, mas possui algumas flags do compilador relacionadas ao JavaScript que já estão habilitadas por padrão.

Para a criação do arquivo tsconfig.json execute o comando.
```bash
npx tsc --init
```
Acesse o arquivo criado, e na tag 
>  "target": "es2016"

altere para 
>  "target": "es2020"

Para mais detalhes consulte a [Documentação da tag Targete](https://www.typescriptlang.org/tsconfig#target)

Para que seja possivel a execução de um arquivo em Node, é preciso uma dependencia do typescript chamada **tsx**, para que não seja necessário nenhuma conversão do arquivo **.ts**

execute o comando
```bash
npm i tsx -D
```
Para a execução do arquivo **server.ts** execute o comando:
```bash
npx tsx src/server.ts
```
> Para ver a execução do arquivo crie um **console.log("hello word");** 

Para não ser necessário rodar todo o comando, pode ser inserido dentro package.json

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
dentro da tag script crie um comando dev, para rodar o comando

```json
 "scripts": {
    "dev": "tsx src/server.ts"
  },
```
para executar o comando use

```bash
npm run dev
``` 
para que não seja preciso restartar o servidor toda vez que o arquivo server.ts for alterado, insira a o comando **watch** no script acima citado, que ficá da seguinte forma.

> tsx **watch** src/server.ts

- ### **Criando Rotas**

A `API RESTful` é uma interface que dois sistemas de computador usam para trocar informações de forma segura pela internet. A maioria das aplicações de negócios precisa se comunicar com outras aplicações internas e de terceiros para executar várias tarefas. As APIs RESTful suportam a troca de informações porque seguem padrões de comunicação de software seguros, confiáveis e eficientes.

E foi para isso que instalamos o [fastify](https://www.fastify.io/)

Como teste cole o seguinte código no arquivo `server.ts`

```typescript
import Fastify from 'fastify'

const app = Fastify()

app.get('/', () => {
    return 'Hello Word'
})

app.listen({
    port: 3333
})
```
Execute o comando:

```bash
npm run dev
``` 
depois acesse **`http://localhost:3333/`** seu navegador 

![](/home/felipe-pc/.var/app/com.github.marktext.marktext/config/marktext/images/2023-04-22-11-52-07-image.png) 

- ### Banco de dados

O uso de ORM's no desenvolvimento de software já é uma pratica comum principalmente para quem trabalha com frameworks, sua utilização facilita vários problemas no acesso e consumo a base de dados. Com isso `Prisma` trouxe uma nova experiência no desenvolvimento de aplicação. 

Prisma é um **`ORM`** `(Object-Relational Mapping)` que ajuda os desenvolvedores a criar aplicações mais rapidamente e cometer menos erros com um kit de ferramentas de banco de dados opensource, como PostgreSQL e MySQL. Além disso, o Prisma também suporta as seguintes linguagens: Javascript e Typescript.

Para instalação do prisma execute o comando:
```bash
npm i -D prisma
```
instale também o cliente do prisma
```bash
npm i @prisma/client
```
Como é um ambiente de desenvolvimento usaremos o sqlite. 
Funciona basicamente como um servidor próprio e independente, já que o Sistema de Gerenciamento de Banco de Dados ou SGBD, pode ser executado na mesma instância – eliminando assim as consultas e processos separados. Portanto, a biblioteca SQLite é gerada e armazenada diretamente no arquivo do banco de dados.

Execute o comando:
```bash
npx prisma init --datasource-provider SQLite
```
Para construção das tabelas consulte a Documentação https://www.prisma.io/docs/concepts/components/prisma-client

- ### Instalando CORS para comunicaçãoe entre aplicações

CORS - Cross-Origin Resource Sharing (Compartilhamento de recursos com origens diferentes) é um mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um aplicativo Web seja executado em uma origem (domínio) com permissão para acessar recursos selecionados de um servidor em uma origem distinta. Um aplicativo Web executa uma requisição cross-origin HTTP ao solicitar um recurso que tenha uma origem diferente (domínio, protocolo e porta) da sua própria origem.

execute o comando:

```bash
npm i @fastify/cors
```
- ### **Setup Front-end**

para o front-end usaremos o **`vite`**.Vite é uma ferramenta para o frontend JavaScript com a qual você pode gerar estrutura de código de vários frameworks como React, Vanilla, Vue, Svelte e outros

Saia do diretório `server/`, no diretório raiz execute o comando.
```bash
npm create vite@lastest
``` 
- Nomei o projeto como **`web`**
- Selecione o framework **`React`**
- Selecione variante de limguagem **`TypeScrit`**

entre no diretório **`web/`** e execute **`npm install`** para instalar as depêndencias.

para executar o vite executre o comando:

```bash
npm run dev
```

- ### Bibliotea de estilização


Tailwind é um framework CSS que permite há você criar layouts para suas aplicações web utilizando sua estrutura. Ou seja, uma ferramenta que fornece componentes para sua estilização. Para instalação execute o comando.

-  `PostCSS`: é uma ferramenta de desenvolvimento de software que usa plugins baseados em JavaScript para automatizar operações CSS rotineiras.

```bash
npm install -D tailwindcss postcss autoprefixer
``` 
após instalação execute o comando:
```bash
npx tailwindcss init -p
``` 
- ### Criando Projeto Mobile

Iremos utilizar **`EXPO`** que é um conjunto de ferramentas e serviços construídos em torno de plataformas nativas e React Native que ajudam você a desenvolver, construir, implantar e iterar rapidamente em aplicativos iOS, Android e web a partir da mesma base de código JavaScript/TypeScript.

Para mais informações veja o artigo [Expo: o que é, para que serve e quando utilizar?](https://blog.rocketseat.com.br/expo-react-native/)

Para [instalação](https://docs.expo.dev/get-started/installation/) clique aqui

Para criar um projeto execute o comando

```bash
npx create-expo-app my-app --template
```
No caso desse projeto foi escolhido o template **`Blank (TypeScript)`**

Após a criação entre na pasta do projeto criado, e execute o comando:

```bash
npx expo start
```
Instalar fontes, acessando google fontes, pesquise por fonte **`Inter`** para verficar a fonte, para instalação execute o comando:

```bash
npx expo install expo-font @expo-google-fonts/inter
```

Observação:
- Para cada alteração no **`schema.prisma`** execute o comando:

```sql
npx prisma migrate dev
```
Caso queira visualizar o diagrama do banco de dados instale o **`prisma erd generator`** execute o comando
```sql
npm i -D prisma-erd-generator @mermaid-js/mermaid-cli
```
dentro do **`schema.prisma`** insira o trecho a baixo
```json
generator erd {
  provider = "prisma-erd-generator"
}
```
Para criar o arquivo execute o comando

```bash
npx prisma generate
```
Para executar arquivo seed.ts use o comando 
```bash
npx prisma db seed
```
- Instalando ZOD

Zod é uma biblioteca de declaração e validação de esquema TypeScript-first. O Zod foi projetado para ser o mais amigável possível ao desenvolvedor. O objetivo é eliminar declarações de tipo duplicadas.

execute o comando:
```bash
npm i zod
```
- Instalando 

Day.js é uma biblioteca JavaScript minimalista que analisa, valida, manipula e exibe datas e horas para navegadores modernos com uma API amplamente compatível com Moment.js. Se você usa Moment.js, já sabe como usar Day.js.

execute o comando:

```bash
npm i dayjs
```

