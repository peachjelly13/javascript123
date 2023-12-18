const {readFile,writeFile} = require('fs').promises
const util = require('util')


const start = async() =>{
    try{
        const first = await readFile('./content/first.txt','utf-8')
        const second = await readFile('./content/second.txt','utf-8')
        await writeFile('./content/make_new.txt','WRITE THIS THERE')
        console.log(first,second)

    }
    catch(error){
        console.log(error)
    }
}
start()//Please watch out forgot to call function and it wasnt working