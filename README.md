# CVTech - Projeto Full Stack

# Vídeo do projeto
sdfgsdfgsdgfsdgf

# 1) Sobre o projeto

Este projeto foi desenvolvido para demonstrar as nossas habilidades na criação de aplicações web, o domínio das ferramentas utilizadas, inteligência criativa, gerar portfólio e principalmente ajudar pessoas a terem um currículo mais moderno e competitivo no mercado de trabalho.
Os usuários cadastrados podem criar um currículo totalmente responsivo e que se adequa a cada tipo de informação fornecida. É simples, prático e serve como utilidade pública para muitas pessoas.

# 2) Tecnologias utilizadas

- Node.js;
- Express.js;
- Sequelize;
- MySQL;
- Bcrypt;
- Multer;

# 3) Dependências utilizadas

| Nome              | Informações                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------|
| Express-generator | Utilizado para a criação básica do projeto em Express.                                                                        |
| Nodemon           | Utilizado para reiniciar o servidor automaticamente para cada alteração nos arquivos em Javascript.                           |
| Bcrypt            | Utilizado para encriptar as senhas do usuário, garantindo a sua segurança do lado do servidor.                                |
| Sequelize         | Utilizado para a criação das models, e garantir a comunicação entre o servidor e o banco de dados (MySQL).                    |
| MySQL2            | Utilizado para que o Sequelize receba e utilize as Queries do MySQL.                                                          |
| Express-session   | Utilizado para gerenciar a criação e destruição das sessões dos usuários logados.                                             |
| Express-validator | Utilizado para efetuar a validação de campos do lado do servidor.                                                             |
| Multer            | Utilizado para auxiliar o servidor no recebimento de arquivos como fotos e para garantir que o servidor sobrescreva arquivos. |

# 4) Como executar o projeto

- Clone a pasta do projeto ou efetue o download em zip.
- Instale as bibliotecas do npm com `npm install`
- Entre em `database/config.js` e atualize as informações de `username` e `password` que foram configuradas na instalação do MySQL.
- Abra o terminal e execute o comando `nodemon` para iniciar o projeto.
- O projeto está configurado para abrir na porta 3000. Após iniciar o projeto, entre em `localhost:3000` em seu navegador para visualizar o projeto rodando localmente.
- Efetue o cadastro, crie seu primeiro currículo e utilize o modo de impressão de seu navegador para salvar um PDF e salvá-lo em sua máquina.

* As configurações para uma melhor impressão estão abaixo:
* *É importante deixar a página no topo para que o lado esquerdo com a foto fique posicionado corretamente. 
![chrome-print-out](https://user-images.githubusercontent.com/86385568/143189879-cda92462-954e-49af-8a0f-8c3c6f53b736.png)



## Observações importantes

Para que seja possível rodar a aplicação sem nenhum problema, é imprescindível a instalação do Node.js, NPM e sua dependências e MySQL na máquina que irá rodar a aplicação. Também é necessário verificar nas configurações se o MySQL está rodando com os mesmos parâmetros configurados em `config/database.js`.

# Autores

Rogério Martins
- Linkedin:
  https://www.linkedin.com/in/rogermds/

Heitor Cazado
- Linkedin:
  https://www.linkedin.com/in/heitor-cazado-03a8a6213/
