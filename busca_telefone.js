const { log } = require('console')
const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const regexTelefone = /\(\d{2}\)\s\d{4,5}-\d{4}/g
/*const regexTelefone = /\(\d+\)\s\d+-\d+/g*/
/*\d+ -> Vai receber uma sequencia númerica */
/*g --> faz com que a regex pegue toda a sequencia e a guarde dentro da variavel*/

const matchTelefone = banco.match(regexTelefone)
console.log(matchTelefone)

const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g
/*Usamos um quantificador para definir exatamente o número de digitos*/

const matchCeluar = banco.match(patternCel)
console.log(matchCeluar);