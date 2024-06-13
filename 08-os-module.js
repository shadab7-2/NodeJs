// OS --Provide methods/function ,using these we can get the information about the oprating system

//import os
const os = require('os')
 
console.log(os.uptime())
// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(), //Tells the name of the Operating System
  release: os.release(),//Tells the release version of the Operating System
  totalMem: os.totalmem(),//Tells the total amount of memory available in bytes
  freeMem: os.freemem(),//Tells the total amount of free memory available in
}
console.log(currentOS)
