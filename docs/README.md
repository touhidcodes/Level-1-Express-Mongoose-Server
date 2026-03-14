# Building an Express-Mongoose-TypeScript Server from Scratch

This guide is designed for beginners to understand how to set up a robust, scalable backend server using the **MVC (Model-View-Controller)** pattern.

---

## Step 1: Initialize the Project

First, create your project folder and initialize it with `npm`.

```bash
# Create folder
mkdir my-server && cd my-server

# Initialize npm
npm init -y
```

## Step 2: Install Dependencies

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

## Step 3: Configure TypeScript

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

## Step 4: Creating the Core Server Files

Before building our data models, we need the "skeleton" of our server.

### 1. `src/app.ts` (The Application Setup)
**Introduction:** This file is where you configure Express. You add "middlewares" (like CORS and JSON parsing) and set up your base routes. It defines *what* the app does, but it doesn't start the server yet.

### 2. `src/server.ts` (The Server Entry Point)
**Introduction:** This is the brain of your project. Its job is to:
1. Connect to your MongoDB database using Mongoose.
2. Start the Express app (`app.ts`) and listen for requests on a specific port.
**Why separate them?** It makes testing easier and keeps your code cleaner!

---

## Step 5: Building the Folder Structure

Now, we create the specialized folders that make up our MVC pattern.

### 1. `src/config/`
**Use Case:** Centralizes all environment variables (API keys, DB URLs, Port numbers).  
**Step:** Create `index.ts` here to export your `.env` variables safely.

### 2. `src/models/`
**Use Case:** Mongoose Schemas and Models.  
**Step:** Create your schemas here. This defines how your data (like Users or Events) is saved in MongoDB.

### 3. `src/routes/`
**Use Case:** Defines the URL endpoints (e.g., `/api/v1/users/login`).  
**Step:** Create route files that map specific URLs to your Controller functions.

---

## Step 6: How to Run Locally

To make development easy, we use `ts-node-dev` which restarts the server automatically when you save a file.

Add these scripts to your `package.json`:
```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

**To start development mode:**
```bash
npm run dev
```

---

## Step 7: How to Compile TypeScript to JavaScript

Browsers and Node.js (in production) don't run TypeScript directly; they run JavaScript. To convert your code:

1. **Run the Build Command:**
   ```bash
   npm run build
   ```
   This uses the `tsc` (TypeScript Compiler) to read your `tsconfig.json` and generate a `dist/` folder containing pure `.js` files.

2. **Run the Compiled Code:**
   ```bash
   npm start
   ```
   This runs the production-ready code from the `dist/` folder.

---

## Best Practices for Beginners
1. **Never commit `.env`**: Always add it to `.gitignore`.
2. **Handle Errors**: Use `try-catch` blocks in controllers to prevent the server from crashing.
3. **Use Status Codes**: Always send proper HTTP status codes (`200` for OK, `201` for Created, `404` for Not Found, `500` for Error).
