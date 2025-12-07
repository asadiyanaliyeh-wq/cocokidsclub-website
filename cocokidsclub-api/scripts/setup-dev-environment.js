#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const targetDb = path.join(__dirname, '..', '.tmp', 'data.db');
const targetUploads = path.join(__dirname, '..', 'public', 'uploads');
const sourceDb = path.join(__dirname, '..', '..', 'initial-data-ready.db');
const sourceUploads = path.join(__dirname, '..', '..', 'initial-public-uploads');

if (!fs.existsSync(targetDb) && fs.existsSync(sourceDb)) {
  console.log('Setting up initial database...');
  fs.mkdirSync(path.dirname(targetDb), { recursive: true });
  fs.copyFileSync(sourceDb, targetDb);
  console.log('Database ready!');
}

if (!fs.existsSync(targetUploads) || fs.readdirSync(targetUploads).length === 0) {
  if (fs.existsSync(sourceUploads)) {
    console.log('Setting up uploaded files...');
    fs.mkdirSync(targetUploads, { recursive: true });
    fs.cpSync(sourceUploads, targetUploads, { recursive: true });
    console.log('Uploaded files ready!');
  }
}

if (fs.existsSync(targetDb)) {
  console.log('Project is ready! Run: npm run develop');
} else {
  console.log('No initial data found. Starting fresh.');
}
