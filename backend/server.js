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



app.use('/images',  express.static(path.join(__dirname, '../images')))
// app.use('/images',  express.static("C:\Users\matej\OneDrive\Desktop\tulen\images"))

if (process.env.MODE_ENV === "production") {
  
  app.use(express.static("/home/matej/tulenserver/tulenfixed/frontend/dist"))

  app.get("*", (req, res) => {
    res.sendFile("/home/matej/tulenserver/tulenfixed/frontend/dist/index.html")
  })
} 



