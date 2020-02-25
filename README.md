# Goomer Lista Rango

Desafio de backend desenvolvido em **NodeJs v13.8.0**, **MongoDB v4.2.3**, **Docker v19.03.6** e **Docker-compose v1.25.4**.

## Requisitos
Para usufruir de todas as funcionalidades do programa, tenha instalado o Node.Js, Docker e o Docker-compose. (Recomendamos o uso da mesma versao apresentada no capitulo acima).

## Rodando a aplicacao

1. Ao baixar o projeto em sua maquina, duplique o arquivo ".env-example" e renomeie o arquivo ".env-example copy" para ".env"
2. Execute "docker-compose up --build".

## Rodando os testes

Para rodar os testes com Jest da aplicacao, basta instalar os pacotes do node com "npm install" e acionar o comando "npm test" para acionar todos os scripts de testes.

Para executar os testes de API basta acessar https://explore.postman.com/templates/5770/goomerlistarango para baixar o workspace.

## Sobre a aplicacao

A aplicacao e dividida em quatro principais componentes: 
1. **Controllers**
Responsaveis pela distribuicao de dados entre funcoes da aplicacao.
2. **Models**
Responsaveis por manter a estrutura dos dados salvos no banco da aplicacao.
3. **Repo**
Inspirado no design pattern "repositories", essa secao da aplicacao e responsavel pelos comandos de interacao com o banco de dados.
4. **Services**
Responsaveis pela parte logica do sistema, as funcoes de Services estao voltadas a manter a regra de negocios funcionando, seja formatando ou validando dados.

## Desafio

Ao desenvolver o sistema, meu principal desafio foi o geranciamento de tempo de entrega. Como nao existe especificacao no tempo de entrega no teste, trabalhei na aplicacao planejando o prazo de entrega de uma semana, do dia que recebi o email para o dia de finalizacao.
Para que assim, eu pudesse focar em nao exagerar no projeto e tambem nao correr demais ao ponto de entregar algo fora dos padroes esperados.
Logo, como dei inicio no planejamento do projeto no sabado 22/02, terminar o projeto ate o dia 25/02 em pleno carnaval foi um pouco desafiador.

## Futuras melhorias

Mesmo que o projeto seja resiliente a entrada de dados fora dos padroes, a seguranca do projeto ainda deixa a desejar.
Para futuras atualizacoes, a implementacao de um sistema de usuarios para autenticacao e gerenciamento de logs da aplicacao e necessaria.
E para melhorar o processo de desenvolvimento adotar testes em Jest nas controllers com BDD aumentaria a performance do desenvolvimento e diminuiria a quantidade de possiveis erros.