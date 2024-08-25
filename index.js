//console.log("hey thanks for stopping by");

// this is a "spread operator" - specifically this is "destructuring" and object.
//require is a specific function to node and this says "pull in the code in the enquierer node module"
// basically goes to the pck.json in enquirer and takes the file and reutrn the output
const { prompt } = require('enquirer');

//look up "promises async and await" -- very important to software 
//these ideas trasnlate to all programing language - use mdn
// start with prmoises, and then go to async/await

(async () => { // this is called an "iife" - immediately invoked function expression

    // the basic idea is how the function handles reading the lines - does it wait for everything to finish or not...
    const response = await prompt({ //this is a js object NOT a json file
        type: 'input',
        name: 'username',
        message: 'What is your username?'
    });

    console.log(response); // { username: 'jonschlinkert' }
})();

