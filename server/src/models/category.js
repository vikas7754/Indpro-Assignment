import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
