'use strict'

// use é utilizado para fazer importações de componentes adonis
const User = use('App/models/User')

class UserController {
  async index ({ response }) {
    const user = await User.query().fetch()

    if (user) {
      return response.json(user)
    } else {
      return response.json('Não encontrado!')
    }
  }

  // ctx -> contexto da requisição
  async store ({ request }) {
    // pegando os dados dos usuários
    // request.only -> permite filtrar os campos do banco que você quer requisitar
    // request.all -> trás todos os campos da tabela
    const data = request.only(['username', 'email', 'password'])

    // criando um novo usuário
    const user = await User.create(data)

    // retornando o usuário
    // pela flag --api-only, passada na criação do projeto, sempre retornará um JSONad
    return user
  }
}

module.exports = UserController
