// GLOBALS Variables  - NO WINDOW !!!!
// __dirname: This variable stores the path to the current working directory.
        console.log(__dirname);
//__filename: This variable stores the path to the current working file.
        console.log(__dirname);
  global.myVariable = 'hello world'
 console.log(myVariable)
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

setTimeout(() => {
  console.log('hello world')
}, 1000)

setInterval(() => {
  console.log("set interval is working")
}, 1000);