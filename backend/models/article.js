const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  articlePartOne: {
    type: String,
    required: true,
  },
  articlePartTwo: {
    type: String,
    required: true,
  },
  articlePartThree: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  hashtag: {
    type:String,
    required:true,
  },
  articleImage: {
    type: String,
    required: true,
  },
  articleImageSecond: {
    type: String,
    required: true,
  },
  
  articleImageThird: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  articleType: {
    type:String,
    required:true
  }
})

const Article = mongoose.model("Article", articleSchema)
module.exports = Article
