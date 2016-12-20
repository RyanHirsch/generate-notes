import fs from 'fs';
import { getFiles } from './get-files';
getFiles()
  .then(files =>
    fs.writeFileSync('./notes.json', JSON.stringify(files, null, 4))
  );
