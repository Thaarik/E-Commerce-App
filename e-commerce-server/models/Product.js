const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true, unique: true },
    category: { type: Array },
    originalPrice: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
    img: { type: String, required: true },
    bestSeller: { type: Boolean, default: false },
    featured: { type: Boolean, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
