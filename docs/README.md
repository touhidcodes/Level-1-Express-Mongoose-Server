# 🚀 Building an Express-Mongoose-TypeScript Server from Scratch

This guide is designed for beginners to understand how to set up a robust, scalable backend server using the **MVC (Model-View-Controller)** pattern.

---

## 🛠 Step 1: Initialize the Project

First, create your project folder and initialize it with `npm`.

```bash
# Create folder
mkdir my-server && cd my-server

# Initialize npm
npm init -y
```

## 📦 Step 2: Install Dependencies

We need several packages for building our server, handling types, and security.

### Core Dependencies
```bash
npm install express mongoose cors dotenv bcrypt
```

### Development Dependencies
These are only needed during development (for TypeScript support and auto-reloading).
```bash
npm install -D typescript ts-node-dev @types/express @types/node @types/cors @types/bcrypt
```

## ⚙️ Step 3: Configure TypeScript

Generate the `tsconfig.json` file to tell the compiler how to handle our code.

```bash
npx tsc --init
```

**Recommended `tsconfig.json` settings:**
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

---

## 📂 Folder Structure & Use Cases

A professional project organizes files by their **responsibility**.

### 1. `src/config/`
**Use Case:** Centralizes all environment variables (API keys, DB URLs, Port numbers).  
**Why?** If you need to change your Database URL, you only change it in one place instead of searching through 20 files.

### 2. `src/types/`
**Use Case:** Stores TypeScript **Interfaces**.  
**Why?** Defines the "shape" of your data. It provides Autocomplete and prevents bugs by ensuring you don't use a field that doesn't exist.

### 3. `src/models/`
**Use Case:** Mongoose Schemas and Models.  
**Why?** This is where you define how your data looks in MongoDB. It handles validation and **Middleware Hooks**.

> **💡 Pro Tip: Mongoose Hooks**
> - **Pre-Hook (`.pre`):** Use this for tasks *before* saving (e.g., hashing a password).
> - **Post-Hook (`.post`):** Use this for tasks *after* saving (e.g., sending a welcome email or logging).

### 4. `src/controllers/`
**Use Case:** Logic of the application.  
**Why?** Controllers take the Request from the user, talk to the Model (Database), and send back a Response.

### 5. `src/routes/`
**Use Case:** Defines the URL endpoints (e.g., `/api/v1/users/login`).  
**Why?** Keeps your code organized by mapping specific URLs to specific Controller functions.

---

## 🚀 Step 4: The "Bootstrap" Process

1. **`app.ts`**: Set up Express, Middlewares (json, cors), and link your main Router.
2. **`server.ts`**: The entry point. Connect to MongoDB first, then start the server listener.

## 🏃 Step 5: Scripts to Run

Add these to your `package.json`:

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

**Run development mode:**
```bash
npm run dev
```

---

## 🛡️ Best Practices for Beginners
1. **Never commit `.env`**: Always add it to `.gitignore`.
2. **Handle Errors**: Use `try-catch` blocks in controllers to prevent the server from crashing.
3. **Use Status Codes**: Always send proper HTTP status codes (`200` for OK, `201` for Created, `404` for Not Found, `500` for Error).
