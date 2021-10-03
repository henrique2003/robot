"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const dotenv_1 = require("dotenv");
const distube_1 = __importDefault(require("./config/distube"));
const distube_2 = __importDefault(require("./utils/distube"));
const music_1 = __importDefault(require("./commands/music"));
(0, dotenv_1.config)();
class Bot {
    constructor() {
        this.configs();
        this.commands();
    }
    configs() {
        this.bot = new discord_js_1.default.Client();
        this.distube = (0, distube_1.default)(this.bot);
        this.ytsearch = new distube_2.default(this.distube);
    }
    commands() {
        this.bot.on('ready', () => {
            console.log('Bot ready!');
        });
        this.bot.on('message', (message) => {
            const music = new music_1.default(this.ytsearch);
            // play
            music.play(message);
            // stop
            music.stop(message);
        });
        // logs
        this.ytsearch.logs();
        // auth login
        this.bot.login(process.env.TOKEN);
    }
}
exports.default = new Bot();
