import smiley from "../assets/smiley.svg"
import humor from "../assets/humor.svg"
import krimi from "../assets/krimi.svg"
import priroda from "../assets/priroda.svg"
import veda from "../assets/veda.svg"
import zaujimavosti from "../assets/zaujimavosti.svg"
import time from "../assets/time.svg"
import spinner from "../assets/spinner.gif"
import spacePixel from "../assets/pixel.png"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL

function chooseSvg(hashtag) {
  if (hashtag === "humor") {
    return humor
  } else if (hashtag === "zaujímavosti") {
    return zaujimavosti
  } else if (hashtag === "krimi") {
    return krimi
  } else if (hashtag === "veda") {
    return veda
  } else if (hashtag === "príroda") {
    return priroda
  }
}

function Card({ classNm, article, timeStamp }) {
  const [data, setData] = useState({})

  return (
    <>
      {!article ? (
        <div>Loading...</div>
      ) : (
        // <div className="card-wrapper">

        <div className={`card ${classNm}`}>
          <Link
            className="card-link"
            to={{ pathname: `/article/${article._id}` }}
          ></Link>
          <div className="card-img-container">
            {/* <img src={spinner} alt="loading..." />) :  */}
            <img
              className="card-img"
              src={`${API_URL}/images/${article.articleImage}`}
              alt="image"
            />
          </div>
          <div className="card-content-wrapper">
            <div className="card-btn-header">
              <a href="#" className="card-btn-tag">
                {/* {console.log(article.hashtag)} */}
                <img src={chooseSvg(article.hashtag)} alt="smiley" />
                <span>{article.hashtag}</span>
              </a>
            </div>
            <h2 className="card-content-title">{article.title}</h2>
            <p className="card-content-medium-text">{article.headline}</p>
            <div className="card-time-icon">
              <img src={time} alt="time" />
              <span>
                {!timeStamp && "dnes"}
                {timeStamp === 1 && `pred 1 dňom`}
                {timeStamp > 1 && `pred ${timeStamp} dňami`}
              </span>
            </div>
          </div>

          {/* </div> */}
        </div>
      )}
    </>
  )
}

export default Card
