require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/routes");
const connectDB = require("./connectDB/connect");
const cors = require("cors");

// middleware to pass data cross platforms
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/", router);

const port = 9000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (err) {
    if (err.hostname === "_mongodb._tcp.shoppingcluster.lvoxaoq.mongodb.net") {
      console.log("Unable to connect! check ur internet connection");
    } else {
      console.log(err);
    }
  }
};
start();
