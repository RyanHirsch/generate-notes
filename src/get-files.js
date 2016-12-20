import fs from 'fs';
import glob from 'glob';
import path from 'path';

function globPromisify(pattern) {
  return new Promise(function(resolve, reject) {
    glob(pattern, (err, files) => {
      if(err) {
        return reject(err);
      }
      resolve(files);
    });
  });
}

function getFileSegments(file, parentFolder, fileType) {
  return file
    .replace(`${parentFolder}${path.sep}`, '')
    .replace(fileType, '')
    .split(path.sep);
}

export function getFiles(folder = 'notes', fileType = '.md') {
  const containingFolder = path.resolve(__dirname, '..', '..', folder);
  const pattern = path.join(containingFolder, '**', `*${fileType}`);

  return globPromisify(pattern)
    .then(filePaths =>
      filePaths.map(path => ({
        segments: getFileSegments(path, containingFolder, fileType),
        content: fs.readFileSync(path).toString(),
        path,
      }))
    );
}
