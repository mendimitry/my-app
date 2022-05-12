import React, { useState } from "react";
import { useCart } from "../../hooks/cart/useCart";
import Main from "./Main";
import { Link } from "react-router-dom";

const container = {

  background: "#d6eff8", /* Цвет фона */
  padding: "1px", /* Поля вокруг текста */
  border: "2px solid #0069b5", /* Параметры синей рамки */
  outline: "2px solid #c52b1c",/* Параметры красной рамки */
  width: "800px"

}

const Inform = ({ data }) => {


  const { addToCart } = useCart();
  return (

    <div className="card">

      <div className="card-content">
        <div style={container}>
          <h2 className="card-heading">Title : {data.title}</h2>
          <p className="card-description">Summary : {data.summary}</p>
          <p className="card-description">Date Publication : {data.publishedAt}</p>
          <div style={container}><img
            src={data.imageUrl} width="800" height="500"
            alt="new"
          /></div>
        </div>
        <div style={container}>
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
            className="btn btn-success"
            onClick={() => addToCart(data)}
          >
            Добавить в bookmarks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inform;
