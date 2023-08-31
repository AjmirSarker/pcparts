import mongoose from "mongoose";
import app from "./app.js";
// import express from "express";

import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import router from "./src/app/routes/route.js";
// const app = express();
// const dotenv = require("dotenv").config();

const port = process.env.PORT || 8080;

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});
let server;
// async function bootstrap() {
//   try {
//     await mongoose.connect(process.env.DATABASE_LINK);
//     // logger.info(`🛢   Database is connected successfully`);
//     console.log(
//       console.log(` 🛢 Database connection is successful 🛢`.blue.bold)
//     );

//     server = app.listen(port, () => {

//       console.log(`App is running on port ${port}`.yellow.bold);
//     });
//   } catch (err) {
//     console.log("Failed to connect database", err);
//   }

//   process.on("unhandledRejection", (error) => {
//     if (server) {
//       server.close(() => {
//         console.log(error);
//         process.exit(1);
//       });
//     } else {
//       process.exit(1);
//     }
//   });
// }

// bootstrap();
const uri =
  "mongodb+srv://arafat1513512:LiaihpogMUnw5uo1@cluster0.bifvtij.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {

            console.log(`App is running on port ${port}`);
          });

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});

