import spinner from "../assets/spinner.gif"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL

const Admin = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    axios
      .get(`${API_URL}/api/articles`)
      .then((res) => setArticles(res.data))
      .catch((error) => console.log(error))
  }, [])
  console.log(articles)

  const deletePost = (id) => {
    axios
      .delete(`${API_URL}/api/articles/${id}`)
      .then((res) => alert(res.data))
      .catch((err) => {
        console.log(err)
      })
    setArticles(articles.filter((elem) => elem._id !== id))
  }

  return (
    <div className="admin-wrapper">
      <Link to={{ pathname: `/admin/add` }}>
        <button className="admin-wrapper-add-button">Add Article</button>
      </Link>

      {!articles.length ? (
        <img src={spinner} alt="loading" />
      ) : (
        articles.map((article, key) => (
          <div className="admin-wrapper-post-container" key={key}>
            <p className="admin-wrapper-post-container-post-title">
              {article.title}
            </p>
            <p className="admin-wrapper-post-container-post-id">
              {article._id}
            </p>

            <Link to={{ pathname: `/admin/${article._id}` }}>
              <button className="admin-wrapper-post-container-edit">
                Edit
              </button>
            </Link>

            <button
              onClick={() => deletePost(article._id)}
              className="admin-wrapper-post-container-delete"
            >
              Delete
            </button>

            <Link to={{ pathname: `/admin/preview/${article._id}` }}>
              <button className="admin-wrapper-post-container-edit">
                Preview
              </button>
            </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Admin
