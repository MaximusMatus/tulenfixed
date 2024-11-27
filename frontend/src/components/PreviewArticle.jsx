import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

function PreviewArticle() {
  const [title, setTitle] = useState("")
  const [headline, setHeadline] = useState("")
  const [article, setArticle] = useState("")
  const [author, setAuthor] = useState("")
  const [fileName, setFileName] = useState("")

  const id = useParams().id

  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${id}`)
      .then((res) => [
        setTitle(res.data.title),
        setHeadline(res.data.headline),
        setArticle(res.data.article),
        setAuthor(res.data.author),
        setFileName(res.data.articleImage),
      ])
      .catch((err) => console.log(err))
  }, [id])

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
          <div className="article-article">{article}</div>
        </div>
      </div>
    </section>
  )
}

export default PreviewArticle
