const {readFile, writeFile} = require("fs")
readFile('./simp/first.txt','utf-8',(err, res) =>{
    if(err){
        
        return
    }
    
    console.log("3")
})

console.log("4")

console.log("1")
writeFile('./simp/first.txt','changed my text', (err, res) =>{
    if(err){
        return
    }
    
    console.log("2")
})


// const {readFileSync, writeFileSync} = require('fs')
// console.log("1")
// const read = readFileSync('./simp/first.txt','utf-8')


// console.log("2")
// writeFileSync('./simp/first.txt','i changed my text',{flag:'a'})
// console.log("3")
// writeFileSync('./simp/second.txt','i changed ',{flag:'a'})