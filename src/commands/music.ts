import { Message } from 'discord.js'

import { mainFlag } from '../config/index.json'
import YtSeacrh from '../utils/distube'

export default class Music {
  private readonly ytsearch: YtSeacrh

  constructor (ytsearch: YtSeacrh) {
    this.ytsearch = ytsearch
  }

  play (message: Message): void {
    const playCode: string = `${mainFlag}play `
    if (message.content.includes(playCode)) {
      this.ytsearch.search(message)
    }
  }

  stop (message: Message): void {
    const playCode: string = `${mainFlag}stop`
    if (message.content.includes(playCode)) {
      this.ytsearch.stop(message)
    }
  }

  skip (message: Message): void {
    const playCode: string = `${mainFlag}skip`
    if (message.content.includes(playCode)) {
      this.ytsearch.skip(message)
    }
  }

  queue (message: Message): void {
    const playCode: string = `${mainFlag}queue`
    if (message.content.includes(playCode)) {
      this.ytsearch.queue(message)
    }
  }
}
