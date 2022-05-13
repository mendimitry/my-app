import React, { useContext, useState, useEffect, useMemo } from "react";
import { useCart, } from "../../hooks/cart/useCart";


import { Link } from "react-router-dom";
import Inform from "../Main/Inform";

import Pagination from "react-js-pagination";
import CartContextProvider from "./CartContextProvider";
export default function CartPage() {



  const [newsPerPage] = useState(3)
  let PageSize = 7;
  let [limit, setLimit] = useState(50);
  let [btn, setBtn] = useState("main-btn");
  const [posts, setPosts] = useState(localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')) : []);
  const { cart } = useCart();

  const [articles, setArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cart.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);


  const showMore = () => {


    const currentTableData = JSON.parse(localStorage.getItem("bookmarks"))
    setPosts(currentTableData)


  };


  return (

    <div>
      <table className="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>URL</th>
              <th>TITLE</th>
              <th>updatedAt</th>
              <th>publishedAt</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map(item => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.url}</td>
                  <td>{item.title}</td>
                  <td>{item.updatedAt}</td>
                  <td>{item.publishedAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Pagination
          className="centerPagination"

          currentPage={currentPage}
          totalCount={cart.length}
          pageSize={PageSize}
          itemsCountPerPage={1}
          totalItemsCount={45}
          pageRangeDisplayed={10}
          onChange={(page) => setCurrentPage(page)}

        />

      </table>

      <button className={btn} onClick={showMore}>
        Page BackWard
      </button>
    </div>



  );
}
