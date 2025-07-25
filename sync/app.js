//const fs =require('fs')
//const read =fs.readFileSync
//const write = fs.writeFileSync


const {readFileSync, writeFileSync} = require('fs')
console.log("1")
const read = readFileSync('./simp/first.txt','utf-8')

console.log(read)
console.log("2")
writeFileSync('./simp/first.txt','i changed my text',{flag:'a'})
console.log("3")
writeFileSync('./simp/second.txt','i changed ',{flag:'a'})