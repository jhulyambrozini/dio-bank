# Desenvolvendo o Dio Bank

desenvolvido por [Nathally Souza](https://github.com/nathyts)
e extendido por [Jhuly Ambrozini](https://github.com/jhulyambrozini)

#### Projeto desenvolvido com React

### Tecnologias

- Typescript
- React.js
- Chakra UI

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências

    ``npm install``

3 - Execute o projeto

    npm start

4 - Para fazer login use no email: jhuly@email.com e senha: 123456

#### Desafios 2

[x] Crie os componentes referentes aos elementos na página inicial

- Crie um componente para o header, com o título da aplicação
- Crie um componente para o botão, que aceite onClick como uma das props do componente
- Refatore o componente Card para receber o formulário de login. Ao invés de chamar elemento por elemento na página inicial, apenas o componente Card deve ser chamado.

[x] Crie uma função de Boas vindas

- Ao clicar no botão, deve aparecer um alert com uma mensagem de boas vindas
- Crie o teste unitário da função

#### Desafios 3

[x] Incluir validação da senha no campo de login
Para logar, além do email faça a validação com a senha informada pelo usuário.
Durante a implementação, aplique o TDD e escreva os testes unitários para a nova validação

[x] Implemente um sistema de login com a Context API
Seguindo os exemplos demonstrados ao longo do curso, crie um estado global para realizar o login
Utilize o localStorage para armazenar os dados do usuário ao logar
Caso os dados do usuário existam no localStorage, a tela de login não deve ser exibida

[x] Crie uma página para exibir as informações do usuário
Crie uma página onde será exibido o nome, email
Esta página só poderá ser acessada caso a usuária esteja logada
Caso a usuária não esteja logada, deve ser mantida na página com a tela de login
Escreva os testes unitários para as funções criadas ou refatoradas.

[x] Fazer o deploy no Netlify e compartilhar o link da página
