const express = require("express");
const { connectToDb } = require("./database/dataBase");
const app = express();
const { config } = require("dotenv");
config();
const { errorMiddleware } = require("./middleware/errorHandler");
const { notFound } = require("./middleware/notFound");
const { router } = require("./router/bug-router");
const PORT = 4500;
app.use(express.json());
app.use("/api/v1/bugs", router);
app.get("/", (req, res) => {
  res.send("bug tracker");
});
app.use(notFound);
app.use(errorMiddleware);

const start = () => {
  try {
    connectToDb(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log("server running on port ", PORT);
    });
  } catch (error) {}
};
start();
