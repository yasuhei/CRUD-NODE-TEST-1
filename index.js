const express = require('express')

const server = express()

server.use(express.json())

const games = ['Ragnarok', 'Call of Duty', 'FIFA21', 'God of War']

// retornar somente um curso
server.get('/games/:id', (require, response) =>  {
  const { id } = require.params

  return response.json(games[id])
})

// retornar todos os games
server.get('/games', (require, response) => {
  return response.json(games)
})

//criar um novo game
server.post('/games', (require, response) => {
  const { name } = require.body
  games.push(name)

 
  return response.json(games)
})

//atualizar um nome de jogo
server.put('/games/:id', (require, response) => {
  const { id } = require.params
  const { name } = require.body

  games[id] = name

  return response.json(games)
})

//deletar um game
server.delete('/games/:id', (require, response) => {
  const { id } = require.params

  games.splice(id, 1)
  return response.json({message: `O jogo + ${id} + foi removido`})
})



server.listen(3000)