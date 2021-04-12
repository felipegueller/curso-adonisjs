'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

// a estansão a Model permite utilizar o ORM que permite realizar as querys, etc..
class User extends Model {
  // contrutor
  static boot () {
    super.boot()

    /**
     Chama a função que é executada automaticamente antes de salvar,
     que tem como objetivo fazer um hash(criptografar) na senha se ela foi alterada.

     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  // retorna um token para a tabela através desse relacionamento hasMany(para muitos)
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

// exportando a classe usuário
module.exports = User
