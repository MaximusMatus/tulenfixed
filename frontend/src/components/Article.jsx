import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import Card from "./Card"
import Paragraphs from "./Paragraphs"

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

  const id = useParams().id
  const API_URL = import.meta.env.VITE_API_URL
  const UPLOADS = import.meta.env.VITE_UPLOADS

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
          <img className="article-title-img" src={`/uploads/${fileName}`}></img>
        </div>
        {/* <hr className="design-line"/> */}
        <div className="article-article-wrapper">
          <div className="article-article">
            <Paragraphs rawText={articlePartOne} />
          </div>
          <div className="img-wrapper">
            <img
              className="article-title-img"
              src={`/uploads/${fileNameSecond}`}
            ></img>
          </div>
          <div className="article-article">
            {" "}
            <Paragraphs rawText={articlePartTwo} />
          </div>

          <div className="img-wrapper">
            <img
              className="article-title-img"
              src={`/uploads/${fileNameThird}`}
            ></img>
          </div>
          <div className="article-article">
            {" "}
            <Paragraphs rawText={articlePartThree} />
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

