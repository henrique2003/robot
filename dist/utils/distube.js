"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YtSeacrh = void 0;
const index_json_1 = require("../config/index.json");
class YtSeacrh {
    constructor(distube) {
        this.distube = distube;
    }
    async search(message) {
        const args = message.content.slice(index_json_1.mainFlag.length).trim().split(/ +/g);
        this.distube.play(message, args.join(' '));
    }
    async stop(message) {
        this.distube.stop(message);
    }
    logs() {
        this.distube.on('searchResult', (message, result) => {
            let i = 0;
            message.channel.send(`**Escolha uma opção abaixo**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join('\n')}`);
        });
        this.distube.on('searchCancel', (message) => {
            message.channel.send('Busca cancelada');
        });
    }
}
exports.YtSeacrh = YtSeacrh;
exports.default = YtSeacrh;
