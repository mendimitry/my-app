import React, { useContext, useState, useEffect, useMemo } from "react";
import { useCart, } from "../../hooks/cart/useCart";

import { Link } from "react-router-dom";
import Inform from "../Main/Inform";

import Pagination from "react-js-pagination";
import CartContextProvider from "./CartContextProvider";
export default function CartPage() {



  const [newsPerPage] = useState(3)
  let [posts, setPosts] = useState(
  );
  let PageSize = 7;
  let [limit, setLimit] = useState(50);


  const { cart } = useCart();


  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)


  
  useEffect(() => {
    const getBookmarks = async () => {
      setLoading(true)
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
      setPosts(bookmarks)

    }
    getBookmarks()
  }, [])


  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cart.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);


  let getNews = () => {
    async function getData() {

      setPosts(cart.map((item) => <Inform key={item.id} data={item} />));
    }
    getData();
  };
  useEffect(getNews, [limit]);

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
          totalCount={cart.length}
          pageSize={PageSize}
          itemsCountPerPage={1}
          totalItemsCount={45}
          pageRangeDisplayed={10}
          onChange={page => setCurrentPage(page)}
          itemClass="page-item"
          linkClass="page-link"
        />

      </table>
    </div>



  );
}
