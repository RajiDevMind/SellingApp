const express = require("express");
const app = express();
const router = require("./routes/routes");
const connectDB = require("./connectDB/connect");

app.get("/", (req, res) => {
  res.send("Hello world");
});

// middleware
app.use(express.json());
app.use("/", router);

const port = 9000;
const start = async () => {
  //   await connectDB();
  app.listen(port, console.log(`Server is listening on port ${port}...`));
};
start();
