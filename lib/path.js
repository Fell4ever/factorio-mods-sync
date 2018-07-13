const path = require('path')

const factorioPath = process.env.APPDATA
  ? path.join(process.env.APPDATA, 'Factorio')
  : process.platform === 'darwin'
    ? path.join(process.env.HOME, 'Library/Application Support/factorio')
    : path.join(process.env.HOME, '.factorio')

const userDataPath = path.join(factorioPath, 'player-data.json')
const modsPath = path.join(factorioPath, 'mods')
const getModPath = name => path.join(modsPath, name)

module.exports = {
  factorioPath,
  userDataPath,
  modsPath,
  getModPath,
}