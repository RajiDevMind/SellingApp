require("dotenv").config();

const connectDB = require("./connectDB/connect");

const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Product was added to DB Successfully!!");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
