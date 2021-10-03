import { Client } from 'discord.js'
import DisTube from 'distube'

const distubeConfrig = (bot: Client): DisTube => {
  return new DisTube(bot, { searchSongs: true, emitNewSongOnly: true })
}

export default distubeConfrig
