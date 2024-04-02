const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const patternNomes = /^([A-Za-zÀ-Ÿ]+)(?:\s([A-Za-zÀ-Ÿ]+))+/gm
/*^ --> Capturar unicamente se esse padrão aparecer no começo da linha*/

const matchNomes = banco.match(patternNomes)

console.log(matchNomes)