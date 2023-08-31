import express from "express";

import cors from "cors";
import router from "./src/app/routes/route.js";
const app = express();
//middlewares
app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});
app.use("/api/v1", router);

app.all("*", (req, res) => {
  res.send("NO route found.");
});


app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});
export default app;
