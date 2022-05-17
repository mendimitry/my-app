
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useCart } from "../../hooks/cart/useCart";
import ReactPaginate from 'react-paginate';
import Pagination from "../bookmark/Pagination";

import { Link } from "react-router-dom";


const Main = () => {

  const [postsPerPage] = useState(5);
  const [offset, setOffset] = useState(1);
  const [start, setStart] = useState('');
  const [posts, setAllPosts] = useState();


  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(false);



  const [pageCount, setPageCount] = useState(50);
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
    const Inform = ({ data }) => {


      const { addToCart } = useCart();
      return (
    
        <div className="card">
    <center>
          <div className="card-content">
            
              <h2 className="card-heading">Title : {data.title}</h2>
              <p className="card-description">Summary : {data.summary}</p>
              <p className="card-description">Date Publication : {data.publishedAt}</p>
              <img
                src={data.imageUrl} width="200" height="500"
                alt="new"
              />
            </div>
            
              {/*<a
    
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="card-url"
              >
                Читать новость в Интернете
              </a> */}
              &nbsp;
    
              {/* <a
                href={`/news/${data.id}`}
                rel="noreferrer"
                className="card-url"
              >
                
              </a> */}
              <Link to={`/news/${data.id}`} className='card-url'>
                Читать новость
              </Link>
              
              
              <button
    className='card-url'
                onClick={() => addToCart(data)}
              >bookmarks
              
              </button>
              </center>
            </div>
            
         
      
      );
    };
  
    const fetchData = () => {
      setLoading(true);
      let endpoint = `https://api.spaceflightnewsapi.net/v3/articles?_start=${currentPage}`;
      fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
          setLoading(false);
          const newArticles = response.map((data) => ({
            title: data.title,
            id: data.id,
            summary: data.summary,
            publishedAt: data.publishedAt,
           imageUrl: data.imageUrl

          }))
        setArticles(newArticles);
        setPageCount(response.nbPages);
      })
      // Error handling
      .catch(error => {
        setLoading(false);
        alert(error);
      });
    }
  
    const pageChange = (data) => {
      setCurrentPage(data.selected);
      fetchData();
    }
  
    useEffect(() => {
        fetchData();
        // Automatic data refresh after 5 minutes
        const interval = setInterval(() => {
          fetchData();
        }, 300000);
        return () => clearInterval(interval);
    }, [query]);

    
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
    
  

   


  useEffect(() => {
    fetchData()
  }, [currentPage])
  

  return (
    <div className="main-app">


      <h2>TEST</h2>
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

        <div className="default light">
      <div className="container">

        
        <div className="loader-container" style={loading ? {display:"block"} : {display:"none"}}> 
          <div className="loader"></div>
        </div>
        <section className="SearchResults" style={loading ? {display:"none"} : {display:"block"}}>
          <div className="SearchResults_container">
           
            {articles.map((posts) => (
              <Inform key={posts.id} data={posts} />
              
            ))}
          </div>
        </section>
      </div>

       <ReactPaginate
         pageCount={30}
         marginPagesDisplayed={1}
         pageRangeDisplayed={10}
         onPageChange={pageChange}
       />
       </div>

       </div>
      
  );
};

export default Main;
