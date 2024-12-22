const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// import path from "path"
const path = require("path")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(express.json())

const articleRouter = require("./routes/articles")
app.use("/api/articles", articleRouter)
// Database stuff
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen  for requests
    app.listen(port, () => {
      console.log("listening")
    })
  })
  .catch((error) => {
    console.log(error)
  })
mongoose.connection.once("open", () =>
  console.log("MongoDB connected successfully")
)


if (process.env.MODE_ENV === "production") {
  // app.use(express.static(path.join(__dirname, "/frontend/dist")))
  // app.use(express.static("/home/matej/tulenserver/tulenfixed/frontend/dist"))
app.use(express.static("/home/matej/tulenserver"))
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  // })
  app.get("*", (req, res) => {
    res.sendFile("/home/matej/tulenserver/tulenfixed/frontend/dist/index.html")
  })
} 
// else if (process.env.MODE_ENV === "development") {
//   const articles = await Article.find().sort({ createdAt: 'desc' })
//   res.render('articles/index', { articles: articles })
// }


