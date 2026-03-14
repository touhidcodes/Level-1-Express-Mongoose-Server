# 🎫 Event Management Platform Server

A robust, beginner-friendly starter template built with **Express**, **Mongoose**, and **TypeScript**.

## 📖 Documentation
- [How to build from scratch](./docs/README.md)
- [Module Development Workflow](./docs/WORKFLOW.md)

## 🛠️ Features
- **TypeScript**: Type safety across the whole app.
- **MVC Architecture**: Clean separation of concerns.
- **Authentication**: Secure registration and login with `bcrypt` & `JWT`.
- **Mongoose Hooks**: Pre-save hashing and Post-save password stripping examples.
- **Centralized Routing**: Easy to scale with new modules.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env` file in the root:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
BCRYPT_SALT_ROUNDS=12
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

### 3. Run the Server
```bash
npm run dev
```

