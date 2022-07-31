import fs from 'fs';

console.log(process.env.NODE_ENV);

fs.rm('./build', {recursive: true, force: true}, () => {
  console.log('The output has been cleaned.');
});
