import React, { useState, useEffect } from "react";


import Inform from "./Inform";


const Main = () => {

  let [posts, setPosts] = useState(
  );
  const [news, SetNews] = useState([])
  const [input, setInput] = useState('');
  let [limit, setLimit] = useState(50);
  let [publishedAt, setPublishedAt] = useState("publishedAt");
  let [btn, setBtn] = useState("main-btn");
  let [loader, setLoader] = useState("hidden");





  let getNews = () => {
    async function getData() {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}`
      );
      SetNews(response.data);
      const data = await response.json();
      setPosts(data.map((item) => <Inform key={item.id} data={item} />));
      setLoader("hidden");
      setBtn("main-btn");
    }
    getData();
  };

  const handleClickSearchTitle = async (e) => {
    const res = await fetch(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=50&title_contains=${input}`
    );
    SetNews(res.data);
    const data = await res.json();
    setPosts(data.map((item) => <Inform key={item.id} data={item} />));
    setLoader("hidden");
    setBtn("main-btn");
  }

  const handleClickSearchSummary = async (e) => {
    const res = await fetch(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=50&summary_contains=${input}`
    );
    SetNews(res.data);
    const data = await res.json();
    setPosts(data.map((item) => <Inform key={item.id} data={item} />));
    setLoader("hidden");
    setBtn("main-btn");
  }


  const Sort = async (e) => {
    const res = await fetch(
      `https://api.spaceflightnewsapi.net/v3/articles?_sort=publishedAt&summary_contains=${input}`
    );
    SetNews(res.data);
    const data = await res.json();
    setPosts(data.map((item) => <Inform key={item.id} data={item} />));
    setLoader("hidden");
    setBtn("main-btn");
  }


  // if(bookmarks === [] || !bookmarks.find(item => item.id === post.id) ? true : false ){
  //     bookmarks.push(post)
  //     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  // }


  // Main Component Lifecycle Changes
  useEffect(getNews, [limit]);

  // Button "Show More" Click Handler
  const showMore = () => {

    setLoader("loader");
    setLimit((prevLimit) => prevLimit + 9);


  };


  const showMore1 = () => {

    setLoader("loader");
    setLimit((prevLimit) => prevLimit - 9);


  };

  return (

    <main>

      <center>


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
        <div className="main">{posts}
          {!posts?.length && <h1>Попробуйте найти другую новость!</h1>}
        </div>


        <button className={btn} onClick={showMore}>
          Page BackWard
        </button>
        <button className={btn} onClick={showMore1}>
          Page Forward
        </button>

      </center>

    </main>


  );
};

export default Main;
