import mongoose from "mongoose";
import app from "./app.js";
import cors from "cors";
import * as dotenv from "dotenv"; 
dotenv.config();
import colors from "colors"; 

app.use(cors());

const port = process.env.PORT;
const url =
 
  process.env.DATABASE_LINK;

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});
let server;
async function bootstrap() {
  try {
    await mongoose.connect(url);

    console.log(` 🛢 Database connection is successful 🛢`.blue.bold);

    server = app.listen(port, () => {
      console.log(`App is running on port ${port}`.yellow.bold);
    });
  } catch (err) {
    console.log("Failed to connect database", err);
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

// process.on("unhandledRejection", (error) => {
//   console.log(error.name, error.message);
//   app.close(() => {
//     process.exit(1);
//   });
// });
