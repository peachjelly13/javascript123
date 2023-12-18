const {readFile,writeFile} = require('fs').promises
const util = require('util')


const start = async() =>{
    try{
        const first = await readFilePromise('./content/first.txt','utf-8')
        const second = await readFilePromise('./content/second.txt','utf-8')
        await writeFilePromise('./content/make_new.txt','WRITE THIS THERE')
        console.log(first,second)

    }
    catch(error){
        console.log(error)
    }
}
start()