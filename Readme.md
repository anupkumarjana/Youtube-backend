# Youtube Backend

- [Model Link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

## Folder Structure (Industry Practises)

-public
-temp
-.gitkeep

-src
(files)
-index.js
-app.js
-constant.js

    (folders)
    -DB
    -Models
    -Controllers
    -Routes
    -Middlewares
    -Utils

- .env
- .gitignore
- .prettierrc
- .prettierignore

## installations

- npm i -D prettier
- **`.prettierrc`**: To standardize code formatting.
- **`.prettierignore`**: Files to exclude from code formatting.

- npm i -D nodemon

## Database Connection

## Database Connection

**`.env`**

- `PORT`
- `MongoDB_URI`

**`constants.js`**

- Store non-sensitive data like the database name here.

**Best Practices for Database Connection:**

- Always use `try-catch` or `(res, rej)` promises for error handling.
- Use `async-await` since database operations can take time due to network latency (especially if the DB is hosted remotely).

### Database Connection Code

```javascript
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // Database connection
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\nMongoDB connected!! DB HOST: ${connectionInstance.connection.host}`
    ); // Log the host for professional debugging
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;

