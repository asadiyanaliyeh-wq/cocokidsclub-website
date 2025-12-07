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
  const fullPath = path.join(__dirname, '..', file);
  if (fs.existsSync(fullPath)) {
    dataFile = file;
    break;
  }
}

if (dataFile) {
  console.log(`دیتابیس پیدا شد: ${dataFile}`);
  console.log('در حال وارد کردن کامل اطلاعات (محصولات + عکس‌ها + ادمین)...');
  try {
    // فقط این خط تغییر کرد: --no-encrypt حذف شد!
    execSync(`npx strapi import --force --file ${dataFile}`, {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
    console.log('تموم شد! همه چیز با موفقیت وارد شد');
    console.log('الان بزن: npm run develop');
  } catch (e) {
    console.error('خطا در ایمپورت خودکار');
    console.error('دستی بزن: npm run db:pull');
  }
} else {
  console.log('فایل دیتابیس اولیه پیدا نشد — از دیتابیس خالی شروع می‌شه');
}
