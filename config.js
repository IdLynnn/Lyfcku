const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6285707688553@s.whatsapp.net"]
global.nomerOwner = "6285707688553"
global.nomorOwner = ['6285707688553']
global.namaDeveloper = "Lynn형사"
global.namaBot = "Lynn형사"
global.packname = ""
global.author = "Lynn형사"
global.thumb = fs.readFileSync("./thumb.png")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Di Tulis Dan Di Fix Oleh ZIRO
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/