const {readFileSync,writeFileSync, readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('2-content','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-sync.txt',`here is the result ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
            }
            console.log('done with this tasl')
        })
    })

})
console.log('starting')