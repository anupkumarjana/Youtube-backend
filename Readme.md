# Youtube Backend

    - [Model Link ](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

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
        -.prettierrc (to standarize the code formatting)
        -.prettierignore ( in which files not to standarize code formatting)

    - npm i -D nodemon

## Database Connection

    .env
        - PORT
        - MongoDB-URL

    constants.js
        - Database Name (which is not that much important to keep in .env file)

    - Always use `try-catch` or `(res,rej)` promise when connecting to database.
    - Database is always in another continent. So it can take time when performing any operation. So, to avoid errors, always use `async-await`.

    ```javascript
    import mongoose from "mongoose";
    import { DB_NAME } from "../constants.js";

    const connectDB = async () => {
    try {
    // this is for database connection
    const connectionInstace = await mongoose.connect(
    `${process.env.MONGODB_URI}/${DB_NAME}`
    );

        console.log(
        `\n MongoDB connected!! DB HOST ${connectionInstace.connection.host}` // this is a professional technique to see in what database we're connected to
        );

    } catch (error) {
    console.log("MongoDb connection error: ", error);
    // process
    }
    };

    export default connectDB;

```

```
