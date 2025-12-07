#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dataFile = path.join(__dirname, '../initial-data.tar.gz');

if (fs.existsSync(dataFile)) {
  console.log('دیتابیس اولیه پیدا شد! در حال وارد کردن اطلاعات... (لطفاً صبر کنید)');
  try {
    execSync('npx strapi import --force --no-encrypt --file initial-data.tar.gz', {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
    console.log('همه چیز با موفقیت وارد شد! حالا می‌تونی npm run develop بزنی');
  } catch (e) {
    console.error('خطا در ایمپورت خودکار. دستی بزن: npm run db:reset');
  }
} else {
  console.log('فایل دیتابیس اولیه پیدا نشد.');
}
