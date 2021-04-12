'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// criando a rota /users
Route.post('users', 'UserController.store')
Route.get('users', 'UserController.index')
