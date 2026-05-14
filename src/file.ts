import fs from 'fs/promises';

import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';

export function getFileDirectory() {
  const currentFile = fileURLToPath(import.meta.url);
  const currentDir = dirname(currentFile);
  return currentDir;
}

export async function writeObjectToFile(obj: object, filename: string) {
  const currentFile = fileURLToPath(import.meta.url);
  const currentDir = dirname(currentFile);
  return fs.writeFile(path.join(currentDir, filename), JSON.stringify(obj));
}
