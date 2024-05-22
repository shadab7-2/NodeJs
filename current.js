// npm - global command, comes with node
//npm --version

//local dependencies - use it only in this particular project 
//npm i <packageName>

// global dependencies - use it in any project
//npm intall -g <packageName>

// package.json manifest file (stores important info about porject/package);
//manual approach (create package.json in the root, )

// npm init (step by step, press enter to skip);

//npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4,[5]]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems)