import fs from 'fs';
import path from 'path';

export interface File {
  fileName: string;
  fullPath: string;
}

const publicDirectory = path.join(process.cwd(), 'public');

export function getFiles(): File[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(publicDirectory);
  const allFiles = fileNames.
    filter(fileName => /jpg|jpeg/i.test(fileName))
    .map((fileName) => {
    // Remove ".md" from file name to get id
    // const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(publicDirectory, fileName);

    return {
      fileName,
      fullPath
    };
  });
  
  return allFiles;
}