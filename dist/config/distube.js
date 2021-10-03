"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const distube_1 = __importDefault(require("distube"));
const distubeConfrig = (bot) => {
    return new distube_1.default(bot, { searchSongs: true, emitNewSongOnly: true });
};
exports.default = distubeConfrig;
