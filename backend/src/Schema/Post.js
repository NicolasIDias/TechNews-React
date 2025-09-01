import { Schema, model } from 'mongoose';


const commentSchema = new Schema({
  author: { type: String, required: true },
  comment: { type: String, required: true }
});


const schema = new Schema({
  id: { type: String, required: true, unique: true },
  likes: { type: Number, required: false, default: 0 },
  time: { type: String, required: true, default: "Some day" },
  description: { type: String, required: true },
  title: { type: String, required: true },
  views: { type: Number, required: false, default: 0 },
  url: { type: String, required: true, default: "localhost:8080/aswofilhnas" },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  comments: { type: [commentSchema], default: [] }
});

export default model("blogPost", schema);