const axios = require('axios')

async function getChars(req, res){
try{
  let characters = await axios('https://swapi.co/api/people')
  res.status(200).send(characters.data)
}catch(error){
  res.status(500).send(error)
}
}

module.exports = {
  getChars
}