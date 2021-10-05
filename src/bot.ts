import Discord, { Client } from 'discord.js'
import { config } from 'dotenv'
import DisTube from 'distube'

import distubeConfrig from './config/distube'
import YtSearch from './utils/distube'
import Music from './commands/music'

config()

class Bot {
  private bot: Client
  private distube: DisTube
  private ytsearch: YtSearch

  constructor () {
    this.configs()
    this.commands()
  }

  configs (): void {
    this.bot = new Discord.Client()
    this.distube = distubeConfrig(this.bot)
    this.ytsearch = new YtSearch(this.distube)
  }

  commands (): void {
    this.bot.on('ready', () => {
      console.log('Bot ready!')
    })

    this.bot.on('message', (message) => {
      const music = new Music(this.ytsearch)

      // play
      music.play(message)

      // stop
      music.stop(message)

      // skip
      music.skip(message)

      // queue
      music.queue(message)
    })

    // this.bot.on('voiceStateUpdate', ({ client, channel, member }, newState) => {
    //   const dmChannel = new DMChannel(client)

    //   const message = new Message(client, {
    //     id: '857852114843729923',
    //     type: 'text'
    //   }, dmChannel)

    //   if (channel === null && newState.channel !== null) {
    //     console.log('Entrou')
    //     message.channel.send(member.nickname)
    //   }
    // })

    // logs
    this.ytsearch.logs()

    // auth login
    this.bot.login(process.env.TOKEN)
  }
}

export default new Bot()
