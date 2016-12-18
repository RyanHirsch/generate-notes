import fs from 'fs';
import path from 'path';

const parentFolder = path.resolve(__dirname, '..', '..');

fs.readdir(parentFolder, (err, files) => {
  if(err) {
    console.error(err);
    return;
  }
  files.forEach(file => console.log(JSON.stringify(file, null, 2)));
});
