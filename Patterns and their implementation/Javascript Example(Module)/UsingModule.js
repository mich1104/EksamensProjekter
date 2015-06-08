/**
 * Created by Michael on 01/06/15.
 */

var RandomModule = require('./ModulePattern');

console.log('No args: '+RandomModule.getRandom());
console.log('Only max: '+RandomModule.getRandom(10));
console.log('Both min and max: '+RandomModule.getRandom(20, 50));