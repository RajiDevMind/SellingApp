const productSchema = require("../models/product");

const data = async (req, res) => {
  try {
    // const { id, productName, price, category, productImage } = req.body;
    const productData = await productSchema.find({});
    res.status(200).json({ value: productData.length, productData });
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = {
  data,
};
