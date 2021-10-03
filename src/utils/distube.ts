import { Message } from 'discord.js'
import DisTube from 'distube'

import { mainFlag } from '../config/index.json'

export class YtSeacrh {
  private readonly distube: DisTube

  constructor (distube: DisTube) {
    this.distube = distube
  }

  async search (message: Message): Promise<void> {
    const args = message.content.slice(mainFlag.length).trim().split(/ +/g)

    this.distube.play(message, args.join(' '))
  }

  async stop (message: Message): Promise<void> {
    this.distube.stop(message)
  }

  logs (): void {
    this.distube.on('searchResult', (message: Message, result) => {
      let i = 0

      message.channel.send(`**Escolha uma opção abaixo**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join('\n')}`)
    })

    this.distube.on('searchCancel', (message: Message) => {
      message.channel.send('Busca cancelada')
    })
  }
}

export default YtSeacrh
