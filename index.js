// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// process.stdin.on('data',(chunk)=>{
//   if(chunk.toString().trim() === 'exit'){
//     process.exit();
//     return;
//   }
//   process.stdout.write(chunk);
// });

const { Engine } = require('./src/Engine')
const { Tutorial } = require('./games/Tutorial')

let newGame = new Engine(Tutorial);
newGame.start();