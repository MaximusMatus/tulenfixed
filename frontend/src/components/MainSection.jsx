import Card from "./Card"
import { useEffect, useState } from "react"

const MainSection = ({ posts }) => {
  // const [articles, setArticles] = useState([])
 

  return (
    <section className="wrapper-section">
      <div className="features">
        <div className="big-feature">
          <Card classNm="card-big" article={posts[0]} />
          
        </div>
        <div className="small-features">
          <div className="small-features-medium">
            <Card classNm="card-medium" article={posts[1]} timeStamp={1}/>
            <Card classNm="card-medium" article={posts[2]} timeStamp={1}/>
          </div>
          <div className="small-features-small">
            <Card classNm="card-small" article={posts[3]} timeStamp={2}/>
            <Card classNm="card-small" article={posts[4]} timeStamp={2}/>
            <Card classNm="card-small" article={posts[5]} timeStamp={2}/>
          </div>
        </div>
      </div>
      <div className="most-read-and-trending-wrapper">
        <div className="most-read-wrapper">
          <div className="most-read">
            <div className="svg-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z" />
              </svg>
            </div>
            <div>Najčítanejšie</div>
          </div>
          <div className="most-read-cards-wrapper">
            <Card classNm="card-medium" article={posts[6]} timeStamp={3}/>
            <Card classNm="card-medium" article={posts[7]} timeStamp={4}/>
          </div>
        </div>
        <div className="trending-wrapper">
          <div className="trending">
            <div className="svg-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>
            </div>
            <div>Trendujúce</div>
            </div>
          <div className="trending-cards-wrapper">
            <Card classNm="card-medium" article={posts[9]} timeStamp={5}/>
            <Card classNm="card-medium" article={posts[10]} timeStamp={6}/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default MainSection
