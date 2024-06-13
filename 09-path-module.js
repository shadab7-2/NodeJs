//The PATH Module 
//The PATH module comes in handy while working with file and directory paths. It provides you with various methods with which you can:
const path = require('path')
//sep is a variable which contains the system specific path separator
console.log(path.sep)
//joins those paths using the system specific path separator and returns the joined path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
//Base name of the file
const base = path.basename(filePath) 
console.log(base)
//directory name
const dir = path.dirname(filePath) 
console.log(dir)
//file extension
const exten = path.extname(filePath) 
console.log(exten);
//path is absolute or not.
const absolute = path.isAbsolute(filePath);
console.log(absolute)

//The path.resolve() function just joins the different paths provided to it using the system specific path separator and then appends the final output to the absolute path of the present working directory.
const absoluteok = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absoluteok)
