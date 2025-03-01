const express = require("express")
const router = express.Router()
const multer = require("multer")
const Article = require("../models/article")
const fs = require("fs")
const path = require("path")
require("dotenv").config()

//VPS MULTER
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "../../images"))
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  },
})

const upload = multer({ storage: storage, limits: 50 * 1024 * 1024 })

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
  console.log("tried")
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
    imageFirstSource: req.body.imageFirstSource,
    imageSecondSource: req.body.imageSecondSource,
    imageThirdSource: req.body.imageThirdSource,
  })

  // C:\Users\matej\OneDrive\Desktop\tulen\frontend\public\uploads
  newArticle
    .save()
    .then(() => res.json("the new Article has been saved"))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// Request find article by id and update
router.put("/:id", upload.array("articleImage"), (req, res) => {
  console.log(res.body)
  Article.findById(req.params.id).then((article) => {
    ;(article.title = req.body.title),
      (article.headline = req.body.headline),
      (article.articlePartOne = req.body.articlePartOne),
      (article.articlePartTwo = req.body.articlePartTwo),
      (article.articlePartThree = req.body.articlePartThree),
      (article.author = req.body.author),
      (article.imageFirstSource = req.body.imageFirstSource),
      (article.imageSecondSource = req.body.imageSecondSource),
      (article.imageThirdSource = req.body.imageThirdSource),
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
