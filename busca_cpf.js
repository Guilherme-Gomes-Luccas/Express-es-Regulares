const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const patternCPF = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}[.-]?/g
/*[] --> criação de uma classe, nessa classe podemos definir mais de uma coisa, por exemplo
na regex feita acima colocamos que depois de 3 números terá um . ou -*/
/*? -> define que a expressão é opcional*/

const matchCPF = banco.match(patternCPF)

console.log(matchCPF)