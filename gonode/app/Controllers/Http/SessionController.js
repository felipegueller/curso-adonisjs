'use strict'

class SessionController {
  // auth -> autenticação
  async store ({ request, response, auth }) {
    // capturando o email e a password
    const { email, password } = request.all()

    // gerando o token
    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController
