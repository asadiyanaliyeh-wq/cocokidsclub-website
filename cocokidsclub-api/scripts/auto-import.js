#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const possibleFiles = [
  'initial-data.tar.gz',
  'initial-data.tar.gz.tar.gz',
  'fresh-initial-data.tar.gz',
  'fresh-initial-data.tar.gz.tar.gz'
];

let dataFile = null;
for (const file of possibleFiles) {
  if (fs.existsSync(path.join(__dirname, '..', file))) {
    dataFile = file;
    break;
  }
}

if (dataFile) {
  console.log(`Found initial data: ${dataFile}`);
  console.log('Importing database + uploads + admin...');
  try {
    execSync(`npx strapi import --force --file ${dataFile}`, {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
    console.log('Import completed successfully!');
    console.log('You can now run: npm run develop');
  } catch (e) {
    console.error('Auto-import failed');
    console.error('Run manually: npm run db:pull');
  }
} else {
  console.log('No initial data file found – starting with empty database');
}
