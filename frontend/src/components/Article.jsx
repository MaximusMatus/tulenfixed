import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import Card from "./Card"
import Paragraphs from "./Paragraphs"
import instagramlogo from "../assets/instagram.svg"
import facebooklogo from "../assets/facebook.svg"

function Article() {
  const [title, setTitle] = useState("")
  const [headline, setHeadline] = useState("")
  const [articlePartOne, setArticlePartOne] = useState("")
  const [articlePartTwo, setArticlePartTwo] = useState("")
  const [articlePartThree, setArticlePartThree] = useState("")
  const [author, setAuthor] = useState("")
  const [fileName, setFileName] = useState("")
  const [fileNameSecond, setFileNameSecond] = useState("")
  const [fileNameThird, setFileNameThird] = useState("")
  const [imageFirstSource, setImageFirstSource] = useState("")
  const [imageSecondSource, setImageSecondSource] = useState("")
  const [imageThirdSource, setImageThirdSource] = useState("")

  const id = useParams().id
  const API_URL = import.meta.env.VITE_API_URL
  

  useEffect(() => {
    axios
      .get(`${API_URL}/api/articles/${id}`)
      .then((res) => [
        setTitle(res.data.title),
        setHeadline(res.data.headline),
        setArticlePartOne(res.data.articlePartOne),
        setArticlePartTwo(res.data.articlePartTwo),
        setArticlePartThree(res.data.articlePartThree),
        setAuthor(res.data.author),
        setFileName(res.data.articleImage),
        setFileNameSecond(res.data.articleImageSecond),
        setFileNameThird(res.data.articleImageThird),
        setImageFirstSource(res.data.imageFirstSource),
        setImageSecondSource(res.data.imageSecondSource),
        setImageThirdSource(res.data.imageThirdSource)
      ])
      .catch((err) => console.log(err))
  }, [id])

  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios
      .get(`${API_URL}/api/articles`)
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="article">
      <div className="article-wrapper">
        <div className="article-headline-wrapper">
          <h2 className="article-title">{title}</h2>
          <h3 className="article-headline">{headline}</h3>
        </div>
        <div className="img-wrapper">
          <img className="article-title-img" src={`${API_URL}/images/${fileName}`}></img>
        <div className="img-source">zdroj: {imageFirstSource}</div>
        </div>
        <div className="article-article-wrapper">
          <div className="article-article">
            <Paragraphs rawText={articlePartOne} />
          </div>
          <div className="img-wrapper">
            <img
              className="article-title-img"
              src={`${API_URL}/images/${fileNameSecond}`}
            ></img>
            <div className="img-source">zdroj: {imageSecondSource}</div>
          </div>
          <div className="article-article">
            {" "}
            <Paragraphs rawText={articlePartTwo} />
          </div>

          <div className="img-wrapper">
            <img
              className="article-title-img"
              src={`${API_URL}/images/${fileNameThird}`}
            ></img>
            <div className="img-source">zdroj: {imageThirdSource}</div>
          </div>
          <div className="article-article">
            {" "}
            <Paragraphs rawText={articlePartThree} />
          </div>
        </div>
        <div className="article-end">
        <div className="author-name">Autor: {author}</div>
        <div className="social-links">
          <span className="social-logo-span">
          <a 
        href="https://www.instagram.com/tulen.top" 
        target="_blank" 
        rel="noopener noreferrer"
        
      >

          <img src={instagramlogo} alt="instagram" />
          </a>

          </span>
          <span className="social-logo-span">
          <a 
        href="https://www.facebook.com/profile.php?id=61571642497388" 
        target="_blank" 
        rel="noopener noreferrer"
        
      >
          <img src={facebooklogo} alt="facebook" />
          </a>
          </span>
        </div>
        </div>
      </div>
      <div className="article-sidebar">
        <div className="article-sidebar-card">
          <Card classNm="card-medium" article={posts[1]} timeStamp={5} />
        </div>
        <div className="article-sidebar-card">
          <Card classNm="card-medium" article={posts[2]} timeStamp={5} />
        </div>
        <div className="article-sidebar-card">
          <Card classNm="card-medium" article={posts[3]} timeStamp={5} />
        </div>
      </div>
    </section>
  )
}

export default Article

