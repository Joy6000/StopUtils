const fs = require('fs')
const { promisify } = require('util')
const glob = promisify(require('glob'))

const cmdHandler = (dir, handler) => {
    if (fs.existsSync(dir)) throw new TypeError('The supplied commands folder does not exist.')
    return glob(`${dir}/**/*.js`).then(cmds => {

        let allCmds = 0
        for (const cmd in cmds) allCmds++;

        console.log(`Stop Utils => Loaded ${allCmds} commands.`)
        for (const cmd of cmds) {

            delete require.cache[cmd]
            const file = require(cmd)
            
            if (isReady(file)) {
                handler.commands.set(file.name, file)
            } else {
                console.warn(`Stop Utils => Unable to load ${file.name}`)
            }

        }
    })
}
function isReady (file) {
    if (!file.name || !file.callback) return false
    else return true
}
module.exports = cmdHandler