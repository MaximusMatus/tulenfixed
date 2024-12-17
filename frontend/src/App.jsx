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
import axiosInstance from './components/axioslogger';

// const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
// const API_ENDPOINT = 'http://localhost:5000/articles'
// axios.interceptors.request.use(function (config) {
  
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });
// function App() {
//   const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   axios
  //     .get("/api/articles")
  //     .then((res) => {
  //       setPosts(res.data)
  //       console.log(posts)
  //     })
  //     .catch((error) => console.log(error))
  // }, [])
  // useEffect(() => {
    // Make a test request
    function App() {
      useEffect(() => {
        // Make a test request
        axiosInstance.get('/api/articles')
          .then((response) => console.log('Data:', response.data))
          .catch((error) => console.error('Error:', error));
      }, []);
    
      return <div>Check the console for logged Axios requests and responses!</div>;
    }

//   return (
//     <div className="body-wrapper">
//       <Header />
//       <div className="content-wrapper">
//         <Routes>
//           <Route path="/admin" element={<Admin />} />
//           <Route path="/admin/add" element={<AddArticle />} />
//           <Route path="/admin/:id" element={<EditArticle />} />
//           <Route path="/admin/preview/:id" element={<Article />} />
//           <Route path="/" element={<MainSection posts={posts} />} />
//           <Route path="/article/:id" element={<Article />} />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   )
// }

export default App
