const { Schema, default: mongoose } = require("mongoose");

const Category = new Schema({
  name: {
    type: String,
    enum: ["writing", "completed", "podcaster", "working", "others"],
    default: "writing",
  },
});


const CategoryModel = mongoose.models.Category || mongoose.model("Category", Category);

export default CategoryModel;