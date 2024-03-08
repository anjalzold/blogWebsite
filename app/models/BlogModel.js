import mongoose,{Schema} from "mongoose";


const BlogModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true,
  },
  category:{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogModel);


module.exports = Blog;

