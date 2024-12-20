const express = require("express")
const router = express.Router()
const multer = require("multer")
const Article = require("../models/article")
const fs = require("fs")
const path = require("path")

// ORIGINAL MULTER
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "././frontend/dist/uploads")
//   },
//   filename: (req, file, callback) => {
//     callback(null, file.originalname)
//   },
// })
//VPS MULTER
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./././uploads")
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

// file removal function
const removeFile = (id) => {
  Article.findById(id).then((article) => {
    console.log(article.articleImage)
    // const fileName = article.articleImage
    fs.unlink(`../frontend/public/uploads/${article.articleImage}`, (err) => {
      if (err) {
        console.log(err)
        return
      }
    })
  })
}

// Request get all articles
router.get("/", (req, res) => {
  console.log('tried')
  Article.find()
    .sort({ createdAt: -1 })
    .limit(11)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`˙Error: ${err}`))
})

// Request find article by id
router.get("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// test with two images
router.post("/add", upload.array("articleImage", 3), (req, res) => {
  console.log('tried to save')
  //  const files = req.files
  console.log(req.body)
  const newArticle = new Article({
    title: req.body.title,
    headline: req.body.headline,
    articlePartOne: req.body.articlePartOne,
    articlePartTwo: req.body.articlePartTwo,
    articlePartThree: req.body.articlePartThree,
    author: req.body.author,
    hashtag: req.body.hashtag,
    articleType: req.body.articleType,
    articleImage: req.files[0].originalname,
    articleImageSecond: req.files[1].originalname,
    articleImageThird: req.files[2].originalname,
  })

  // C:\Users\matej\OneDrive\Desktop\tulen\frontend\public\uploads
  newArticle
    .save()
    .then(() => res.json("the new Article has been saved"))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// Request find article by id and update
router.put("/:id", upload.array("articleImage"), (req, res) => {
  Article.findById(req.params.id).then((article) => {
    ;(article.title = req.body.title),
      (article.headline = req.body.headline),
      (article.article = req.body.article),
      (article.body = req.body.article),
      (article.hashtag = req.body.hashtag),
      (article.articleType = req.body.articleType),
      (article.articleImage = req.files[0].originalname),
      (article.articleImageSecond = req.files[1].originalname),
      (article.articleImageThird = req.files[2].originalname),
      article
        .save()
        .then(() => res.json("article has been updated successfully"))
        .catch((err) => res.status(400).json(`Error: ${err}`))
  })
})

// Request find by ID and delete
router.delete("/:id", (req, res) => {
  removeFile(req.params.id)
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json("The article has been deleted"))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

module.exports = router
