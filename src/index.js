const Discord = require('discord.js')

try {
  const bot = new Discord.Client()

  bot.on('ready', () => {
    console.log('Bot ready!')
  })

  bot.login("ODkzMzU0MjA2MDgwMTcyMDYy.YVaO8A.nmAvzckrI7dFPnN2ebVrh8XcS40")
} catch (error) {
  console.log(error.message)
}