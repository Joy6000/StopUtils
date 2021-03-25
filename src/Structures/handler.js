const Discord = require('discord.js')
class Handler {
    /**
     * @constructor
     * 
     * 
     * @property {dir} options.commandsDir
     * @property {dir} options.featuresDir
     */
    constructor(client, options = {}) {
        this.client = client;
        this.commandsDir = commandsDir;
        this.featuresDir = featuresDir;
        this.prefix = '!';
        this.owners = [];


        let { commandsDir, featuresDir } = options
        
        if (!client) throw new TypeError('Stop Utils => Missing Discord Client instance')

        if (!commandsDir) console.warn('Stop Utils => No specified commands folder.')

        if (!featuresDir) console.warn('Stop Utils => No specified features folder')
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