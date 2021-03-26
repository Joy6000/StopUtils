const Discord = require('discord.js')
const cmdHandler = require('../Handlers/Commands')
const colors = require('colors')
const path1 = require('path')
class Handler {
    constructor(client, options = {}) {
        this.client = client;
        this.commandsDir = commandsDir;
        this.featuresDir = featuresDir;
        this.prefix = '!';
        this.owners = [];
        this.commands = new Discord.Collection()


        let { commandsDir, featuresDir, commands } = options
        
        if (!client) throw new TypeError('Stop Utils => Missing Discord Client instance')

        if (!commandsDir) colors.yellow('Stop Utils => No specified commands folder.')

        if (!featuresDir) colors.yellow('Stop Utils => No specified features folder')
        

        if (module && require.main) {
            const { path } = require.main
            (async () => {
                await cmdHandler(path1.join(path, commands || this.commandsDir))
            })()
        }
    }
    /**
     * 
     * @param {String} prefix 
     */

    setPrefix(prefix) {
        if (typeof prefix !== 'string') throw new TypeError('Stop Utils => Prefix must be string')
        this.prefix = prefix
        return this
    }
    /**
     * 
     * @param {Array<String>} owners 
     */

    setOwners(owners) {
        let Owners
        if (!owners) Owners = []
        else Owners = owners
        this.owners = Owners
        return this
    }
}
module.exports = Handler