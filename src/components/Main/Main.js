
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useCart } from "../../hooks/cart/useCart";
import ReactPaginate from 'react-paginate';
import Pagination from "../bookmark/Pagination";
import Inform from "./Inform";
import { Link } from "react-router-dom";


const Main = () => {

  const [postsPerPage] = useState(5);
  const [offset, setOffset] = useState(1);
  const [start, setStart] = useState('');
  const [posts, setAllPosts] = useState();

  const [pageCount, setPageCount] = useState(10)
    const [news, SetNews] = useState([])
 
    const [input, setInput] = useState('');

    let [limit, setLimit] = useState(50);
    let [publishedAt, setPublishedAt] = useState("publishedAt");
    let [btn, setBtn] = useState("main-btn");
    let [loader, setLoader] = useState("hidden");
    const [currentPage, setCurrentPage] = useState(1)
    const [newsPerPage] = useState('')
  
    const handleClickSearchTitle = async (e) => {
      const res = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_title_contains=${input}`
      );
      SetNews(res.data);
      const data = await res.json();
      setAllPosts(data.map((item) => <Inform key={item.id} data={item} />));
      setLoader("hidden");
      setBtn("main-btn");
    }
  
    const handleClickSearchSummary = async (e) => {
      const res = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_summary_contains=${input}`
      );
      SetNews(res.data);
      const data = await res.json();
      setAllPosts(data.map((item) => <Inform key={item.id} data={item} />));
      setLoader("hidden");
      setBtn("main-btn");
    }
  
  
    const Sort = async (e) => {
      const res = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_sort=publishedAt&summary_contains=${input}`
      );
      SetNews(res.data);
      const data = await res.json();
      setAllPosts(data.map((item) => <Inform key={item.id} data={item} />));
      setLoader("hidden");
      setBtn("main-btn");
    }
  
    const { addToCart } = useCart();
    
  const getPostData = (data) => {

    return (

      
data.map((post) => <div className="container"  key={post} data={post}>
       <div className="card">
         
<center>
  
      <div className="card-content">
        
          <h2 className="card-heading">Title : {post.title}</h2>
          <p className="card-description">Summary : {post.summary}</p>
          <p className="card-description">Date Publication : {post.publishedAt}</p>
          <img
            src={post.imageUrl} width="200" height="500"
            alt="new"
          />
                    <button
            onClick={() => addToCart(post)}
          >bookmarks
          
          </button>
          <Link to={`/news/${post.id}`} className='card-url'>
            Читать новость
            
          </Link>
          
        </div>
        
          
          
         
          </center>
        </div>
       
      </div>
      
      )
    )

  }

  const getAllPosts = async () => {
    const response = await fetch(
      `https://api.spaceflightnewsapi.net/v3/articles?_start=${start}&_limit=50`
    );
    const data = await response.json();
    const slice = data.slice(offset - 1, offset - 1 + postsPerPage)
    const postData = getPostData(slice)
    setAllPosts(postData)
    setPageCount(Math.ceil(data.length / postsPerPage))

    
  }

   
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1)
  };

  useEffect(() => {
    getAllPosts()
  }, [offset])
  useEffect(() => {
    getAllPosts()
  }, [start])
  

  return (
    <div className="main-app">

      {posts}
      <input  onInput={e => setStart(e.target.value)} />
      <table>
          <tr><th><div className="searchTitle">
            <input name="inpSearchTitle" placeholder="Title input" onInput={e => setInput(e.target.value)} />
            <button name="btnSearch" onClick={handleClickSearchTitle}>Ищите title</button>
          </div></th><th><div className="searchSummary">
            <input name="inpSearchSummary" placeholder="Summary input" onInput={e => setInput(e.target.value)} />
            <button name="btnSearch" onClick={handleClickSearchSummary}>Ищите summary</button>
          </div></th><th><div className="Sort">
            <input name="inpSearchSort" placeholder="Sort input" onInput={e => setInput(e.target.value)} />
            <button name="btnSearch" onClick={Sort}>Ищите sort</button>
          </div></th></tr>

        </table>

      <ReactPaginate
      
        breakClassName={"break-me"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"} />
    </div>
  );
};

export default Main;
