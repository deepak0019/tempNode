// CommoneJS, Every file is a module
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utilis')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
// console.log(data);

sayHi(names.john);
// sayHi(names.peter);
