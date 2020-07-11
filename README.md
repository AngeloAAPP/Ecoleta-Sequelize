# Ecoleta-Sequelize
Back-end(Servidor) do <a href = "https://github.com/AngeloAAPP/Ecoleta">ecoleta</a> desenvolvido novamente, desta vez com sequelize para colocar em prática conceitos 
aprendidos como migrations, seeders, models, validações, transaction, relacionamentos, tudo isso com sequelize


## Como utilizar

Primeiramente, renomear o arquivo .env.example para .env, e alterar as informações conforme a o seu computador e banco de dados.
Depois, navegar até a pasta src, config, e editar o arquivo database.js de acordo com o seu banco de dados. Por ter sido desenvolvido desta vez com sequelize, não é necessário
que o banco de dados seja obrigatóriamente o sql server. Basta configurar o arquivo corretamente e instalar a dependência correta do banco de dados. Mais informações na 
documentação do <a href = "https://sequelize.org/master/manual/getting-started.html">Sequelize</a>

Agora, abra o terminal no diretório raiz do servidor, e rode os seguintes comandos, um por vez, aguardando suas respectivas conclusões:

```sh
npm install

npm install --production
```

Após instalar as dependências, Iremos criar a base de dados, as tabelas através das migrations, e popular as tabelas necessárias através dos seeders.

rode os seguintes comandos, um por vez, aguardando suas respectivas conclusões:

```sh
npx sequelize db:create

npx sequelize db:migrate

npx sequelize db:seed:all
```

Se tudo ocorrer conforme o esperado, temos nossa base de dados criada.

Agora, basta rodar 

```sh
npm start
```

O servidor está rodando! agora basta consumir a api com o front-end e mobile, disponível no <a href = "https://github.com/AngeloAAPP/Ecoleta">projeto original</a>, criado sem o sequelize
