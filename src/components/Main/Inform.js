import React, { useState } from "react";
import { useCart } from "../../hooks/cart/useCart";
import Main from "./Main";
import { Link } from "react-router-dom";



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

export default Inform;
