"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_json_1 = require("../config/index.json");
class Music {
    constructor(ytsearch) {
        this.ytsearch = ytsearch;
    }
    play(message) {
        const playCode = `${index_json_1.mainFlag}play `;
        if (message.content.includes(playCode)) {
            this.ytsearch.search(message);
        }
    }
    stop(message) {
        const playCode = `${index_json_1.mainFlag}stop `;
        if (message.content.includes(playCode)) {
            this.ytsearch.stop(message);
        }
    }
}
exports.default = Music;
