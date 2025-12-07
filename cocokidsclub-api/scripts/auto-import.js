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
  console.log(`دیتابیس پیدا شد: ${dataFile} — در حال وارد کردن کامل اطلاعات...`);
  try {
    execSync(`npx strapi import --force --no-encrypt --file ${dataFile}`, {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
    console.log('تموم شد! همه چیز (محصولات، عکس‌ها، ادمین) وارد شد.');
    console.log('الان بزن: npm run develop');
  } catch (e) {
    console.error('خطا در ایمپورت خودکار. دستی بزن: npm run db:reset');
  }
} else {
  console.log('هیچ فایل دیتابیس اولیه‌ای پیدا نشد. از دیتابیس خالی شروع می‌شه.');
}
