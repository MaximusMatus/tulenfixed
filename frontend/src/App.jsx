import { useState, useEffect } from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import MainSection from "./components/MainSection"
import Admin from "./components/Admin"
import AddArticle from "./components/AddArticle"
import EditArticle from "./components/EditArticle"
import PreviewArticle from "./components/PreviewArticle"
import Article from "./components/Article"
import axios from "axios"
import { Routes, Route } from "react-router-dom"

// const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
// const API_ENDPOINT = 'http://localhost:5000/articles'

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios
      .get("/api/articles")
      .then((res) => {
        setPosts(res.data)
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className="body-wrapper">
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add" element={<AddArticle />} />
          <Route path="/admin/:id" element={<EditArticle />} />
          <Route path="/admin/preview/:id" element={<Article />} />
          <Route path="/" element={<MainSection posts={posts} />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
