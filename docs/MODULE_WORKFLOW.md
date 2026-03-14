# Module Development Workflow

Follow this workflow every time you want to add a new feature (e.g., "Blog Posts") to your server.

## 1. Define the Interface
Create a file in `src/types/` (e.g., `post.interface.ts`).
- Define what data the post needs (Title, Content, Author).

## 2. Create the Model
Create a file in `src/models/` (e.g., `post.model.ts`).
- Import the Interface.
- Define the Mongoose Schema.
- Add any validation or Hooks (Pre/Post).

## 3. Create the Controller
Create a file in `src/controllers/` (e.g., `post.controller.ts`).
- Create an object (e.g., `postControllers`).
- Write functions for CRUD (Create, Read, Update, Delete).
- Use `try-catch` for safety.

## 4. Set Up Routes
Create a file in `src/routes/` (e.g., `post.route.ts`).
- Map URLs to your Controller functions.
- Export the `Router`.

## 5. Register in Central Router
Open `src/routes/index.ts`.
- Import your new Route.
- Add it to the `moduleRoutes` array.

---

### ✅ Success! 
Your new module is now automatically available under `/api/v1/your-path`.
