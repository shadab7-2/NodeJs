const { log } = require('console')
const os = require('os')
 const user = os.userInfo()
 console.log(user)

 console.log(`this is the system uptime: ${os.uptime()} and ${os.totalmem()}`)

 const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem: os.freemem(),
 }

 