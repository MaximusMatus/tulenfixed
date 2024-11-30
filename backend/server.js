const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// import path from "path"
const path = require("path")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())




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

// const __dirname  = path.resolve()


if(process.env.MODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  })
}


const articleRouter = require("./routes/articles")
app.use("/articles", articleRouter)
