# 🚀 راهنمای اجرای پروژه CocoKidsClub

پروژه **CocoKidsClub** شامل دو بخش اصلی است:

* 🎨 **فرانت‌اند**: React + Vite
* ⚙️ **بک‌اند**: Strapi

برای اجرای صحیح پروژه، لازم است هر دو بخش **به‌صورت همزمان** اجرا شوند.

---

## 1️⃣ کلون کردن مخزن پروژه

ابتدا مخزن پروژه را کلون کرده و وارد پوشه آن شوید:

```bash
git clone https://github.com/asadiyanaliyeh-wq/cocokidsclub-website
cd cocokidsclub-website
```

---

## 2️⃣ اجرای فرانت‌اند (Frontend)

در مسیر اصلی پروژه، دستورات زیر را اجرا کنید:

```bash
npm install
npm run dev
```

پس از اجرای موفق، فرانت‌اند پروژه در آدرس زیر در دسترس خواهد بود:

🔗 **[http://localhost:5173](http://localhost:5173)**

---

## 3️⃣ اجرای بک‌اند (Strapi)

### 📄 ساخت فایل `.env`

وارد پوشه `cocokidsclub-api` شوید و یک فایل با نام `.env` (در کنار فایل `.env.example`) ایجاد کنید و محتوای زیر را داخل آن قرار دهید:

```env
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=10PoDcQDI56ekARPlhXUDA==,S1DjanV8WZciLLgCvTYS+A==,DKW7lk31rsKt/1+b/T4YkQ==,8RUel7DTk8QiquYFInCOSg==
API_TOKEN_SALT=QRg9UJvnPFXPHhkKFl+BUQ==
ADMIN_JWT_SECRET=iERWYSVnkvmUS8dnigOXaw==
TRANSFER_TOKEN_SALT=+H4ruq7UOje7QMt4ORNXvw==
ENCRYPTION_KEY=kc4ArVb+I4zSQHSZav0z4Q==

# Database (SQLite)
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
DATABASE_SSL=false

JWT_SECRET=AluasUm/eF0tKtr5eskeGg==
```

---

### ▶️ اجرای Strapi

در پوشه `cocokidsclub-api` دستورات زیر را اجرا کنید:

```bash
cd cocokidsclub-api
npm install
npm run develop
```

پس از اجرا، سرور و پنل مدیریت Strapi در آدرس زیر در دسترس خواهد بود:

🔗 **[http://localhost:1337](http://localhost:1337)**

---

## 4️⃣ نتیجه نهایی

پس از اجرای موفق هر دو بخش:

* 🎨 **فرانت‌اند**: [http://localhost:5173](http://localhost:5173)
* ⚙️ **بک‌اند (Strapi)**: [http://localhost:1337](http://localhost:1337)

---

✨ اکنون پروژه CocoKidsClub آماده توسعه و استفاده است. موفق باشید!
