process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data',(chunk)=>{
  if(chunk.toString().trim() === 'exit'){
    process.exit();
    return;
  }
  process.stdout.write(chunk);
});