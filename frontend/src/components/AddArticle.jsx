import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const AddArticle = () => {
  const [title, setTitle] = useState("")
  const [headline, setHeadline] = useState("")
  const [articlePartOne, setArticlePartOne] = useState("")
  const [articlePartTwo, setArticlePartTwo] = useState("")
  const [articlePartThree, setArticlePartThree] = useState("")
  const [author, setAuthor] = useState("")
  const [hashtag, setHashtag] = useState("")
  const [articleType, setArticleType] = useState("")
  const [fileName, setFileName] = useState([])

  const onChangeFile = (e) => {
    // setFileName(e.target.files[0])
    setFileName((fileName) => [...fileName, e.target.files[0]])
  }

  const changeOnClick = (e) => {
    e.preventDefault()
console.log(fileName)
    const formData = new FormData()

    formData.append("title", title)
    formData.append("headline", headline)
    formData.append("articlePartOne", articlePartOne)
    formData.append("articlePartTwo", articlePartTwo)
    formData.append("articlePartThree", articlePartThree)
    formData.append("author", author)
    formData.append("hashtag", hashtag)
    formData.append("articleType", articleType)
    for(let i = 0; i < fileName.length; i++)
    {

      formData.append("articleImage", fileName[i])
    }

    setTitle("")
    setHeadline("")
    setArticlePartOne("")
    setArticlePartTwo("")
    setArticlePartThree("")
    setAuthor("")
    setHashtag("")
    setFileName("")
    setArticleType("")
    setFileName([])

    axios
      .post("http://localhost:5000/articles/add", formData)
      .then((res) => console.log("uploaded the article"))
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div className="add-article-wrapper">
        <h1>Add New Article</h1>

        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="author">Author Name</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="form-control"
              placeholder="Author Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="hashtag">Hashtag</label>
            <select
              name="hashtag"
              id="hashtag"
              className="hashtag"
              // type="text"
              value={hashtag}
              onChange={(e) => setHashtag(e.target.value)}
            >
              <option value="">Vyber možnosť</option>
              <option value="humor">Humor</option>
              <option value="zaujímavosti">Zaujímavosti</option>
              <option value="krimi">Krimi</option>
              <option value="príroda">Príroda</option>
              <option value="veda">Veda</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="articleType">Article Type</label>
            <select
              name="articleType"
              id="articleType"
              className="article-type"
              // type="text"
              value={articleType}
              onChange={(e) => setArticleType(e.target.value)}
            >
              <option value="">Vyber možnosť</option>
              <option value="basic">Basic</option>
              <option value="long">Long</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <textarea
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
              maxLength={80}
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="headline">Headline</label>
            <textarea
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="form-control"
              maxLength={150}
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="articlePartOne">Article Part One</label>
            <textarea
              value={articlePartOne}
              onChange={(e) => setArticlePartOne(e.target.value)}
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="articlePartTwo">Article Part Two</label>
            <textarea
              value={articlePartTwo}
              onChange={(e) => setArticlePartTwo(e.target.value)}
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="articlePartThree">Article Part Three</label>
            <textarea
              value={articlePartThree}
              onChange={(e) => setArticlePartThree(e.target.value)}
              className="form-control"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="file">Choose article image</label>
            <input
              type="file"
              filename="articleImage"
              className="form-control-file"
              onChange={onChangeFile}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="file">Choose second article image</label>
            <input
              type="file"
              filename="articleImage"
              className="form-control-file"
              onChange={onChangeFile}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="file">Choose third article image</label>
            <input
              type="file"
              filename="articleImage"
              className="form-control-file"
              onChange={onChangeFile}
            ></input>
          </div>
          <button type="submit" className="btn-submit">
            Post Article
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddArticle

// ORIGINAL WITH ONE PICTURE
// const AddArticle = () => {
//   const [title, setTitle] = useState("")
//   const [headline, setHeadline] = useState("")
//   const [article, setArticle] = useState("")
//   const [author, setAuthor] = useState("")
//   const [hashtag, setHashtag] = useState("")
//   const [articleType, setArticleType] = useState("")
//   const [fileName, setFileName] = useState("")

//   const onChangeFile = (e) => {
//     setFileName(e.target.files[0])
//   }

//   const changeOnClick = (e) => {
//     e.preventDefault()

//     const formData = new FormData()

//     formData.append("title", title)
//     formData.append("headline", headline)
//     formData.append("article", article)
//     formData.append("author", author)
//     formData.append("hashtag", hashtag)
//     formData.append("articleType", articleType)
//     formData.append("articleImage", fileName)

//     setTitle("")
//     setHeadline("")
//     setArticle("")
//     setAuthor("")
//     setHashtag("")
//     setFileName("")
//     setArticleType("")
//     setFileName("")

//     axios
//       .post("http://localhost:5000/articles/add", formData)
//       .then((res) => console.log("uploaded the article"))
//       .catch((err) => {
//         console.log(err)
//       })
//   }

//   return (
//     <div>
//       <div className="add-article-wrapper">
//         <h1>Add New Article</h1>

//         <form onSubmit={changeOnClick} encType="multipart/form-data">
//           <div className="form-group">
//             <label htmlFor="author">Author Name</label>
//             <input
//               type="text"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//               className="form-control"
//               placeholder="Author Name"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="hashtag">Hashtag</label>
//             <select
//               name="hashtag"
//               id="hashtag"
//               className="hashtag"
//               // type="text"
//               value={hashtag}
//               onChange={(e) => setHashtag(e.target.value)}
//             >
//               <option value="">Vyber možnosť</option>
//               <option value="humor">Humor</option>
//               <option value="zaujímavosti">Zaujímavosti</option>
//               <option value="krimi">Krimi</option>
//               <option value="príroda">Príroda</option>
//               <option value="veda">Veda</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="articleType">Article Type</label>
//             <select
//               name="articleType"
//               id="articleType"
//               className="article-type"
//               // type="text"
//               value={articleType}
//               onChange={(e) => setArticleType(e.target.value)}
//             >
//               <option value="">Vyber možnosť</option>
//               <option value="basic">Basic</option>
//               <option value="long">Long</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <textarea
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="form-control"
//               placeholder="Title"
//               maxLength={80}
//               rows="3"
//             ></textarea>
//           </div>

//           <div className="form-group">
//             <label htmlFor="article">Headline</label>
//             <textarea
//               value={headline}
//               onChange={(e) => setHeadline(e.target.value)}
//               className="form-control"
//               maxLength={150}
//               rows="3"
//             ></textarea>
//           </div>

//           <div className="form-group">
//             <label htmlFor="article">Article</label>
//             <textarea
//               value={article}
//               onChange={(e) => setArticle(e.target.value)}
//               className="form-control"
//               rows="3"
//             ></textarea>
//           </div>

//           <div className="form-group">
//             <label htmlFor="file">Choose article image</label>
//             <input
//               type="file"
//               filename="articleImage"
//               className="form-control-file"
//               onChange={onChangeFile}
//             ></input>
//           </div>

//           {/* Testing for another picture */}
//           <div className="form-group">
//             <label htmlFor="file">Choose second article image</label>
//             <input
//               type="file"
//               filename="articleImageTwo"
//               className="form-control-file"
//               onChange={onChangeFile}
//             ></input>
//           </div>
//           {/* end of testing */}
//           <button type="submit" className="btn-submit">
//             Post Article
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }
