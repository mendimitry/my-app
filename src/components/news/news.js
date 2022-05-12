import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const News = () => {
  const { id } = useParams();
  const [article, setArticle] = useState();
  const [sameArticles, setSameArticles] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      const articleResp = await fetch(`https://api.spaceflightnewsapi.net/v3/articles?id=${id}`);
      const article = (await articleResp.json())[0];

      const firstWord = article.title.substr(0, article.title.indexOf(' '));
      const sameArticlesResp = await fetch(`https://api.spaceflightnewsapi.net/v3/articles?title_contains=${firstWord}`);
      const sameArticles = await sameArticlesResp.json();

      setArticle(article);
      setSameArticles(sameArticles);
    }

    fetchData();
  }, [])


  return (
    <center>
   
        <div className="news">
        </div>
       
          <div>
            <div>
              <h1>Title : {article?.title}</h1>
           
            <div>
            <span>
                Summary : {article?.summary}
              </span>
              <br></br>
              <br></br>
              <span>
                Date Publication : {article?.publishedAt}
              </span>
              <br></br>
              <br></br>
              <span>Date updatedAt : {article?.updatedAt}</span>
            </div>
            <div>
              <span><img
                src={article?.imageUrl} width="800" height="500"
                alt="new"
              /></span>
            </div>

            <a
              href={article?.url}
              target="_blank"
              rel="noreferrer"
              className="card-url"
            >
              Читать новость
            </a>
          </div>

          <h2>Похожие новости</h2>
          <div>
            {
              sameArticles.map(article => <><span>Title : {article.title}</span>&nbsp;<div>
                <span>Date Publication : {article?.publishedAt}
                </span>
              </div><a
                href={article?.url}
                target="_blank"
                rel="noreferrer"
                className="card-url"
              >
                  Читать эту новость
                </a><br /></>)
            }
          </div>
        </div>
    
    </center>
  );
};

export default News;
