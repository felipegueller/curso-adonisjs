'use strict'

// use é utilizado para fazer importações de componentes adonis
const User = use('App/models/User')

class UserController {
  // ctx -> contexto da requisição
  async store ({ request }) {
    // pegando os dados dos usuários
    // request.only -> permite filtrar os campos do banco que você quer requisitar
    // request.all -> trás todos os campos da tabela
    const data = request.only(['username', 'email', 'password'])

    // criando um novo usuário
    const user = await User.create(data)

    // retornando o usuário
    // pela flag --api-only, passada na criação do projeto, sempre retornará um JSON
    return user
  }
}

module.exports = UserController
