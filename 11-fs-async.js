const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf-8',(err, result)=>{
   if(err){
    console.log(err)
    return;
   }
   const first = result;
   readFile('./content/second.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const second = result;
    writeFile('./content/result-system.txt' ,`here,  the result: ${first}, ${second}`,(err)=>{
        if(err){
            console.log(err)
        }

        console.log(
            "file added successfully"
        )
    })
   })
})