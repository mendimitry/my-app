import React, { useState, useEffect } from 'react'
import Pagination from "react-js-pagination";




function Bookmarks() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [newsPerPage] = useState(5)
    let PageSize = 7;
    
    useEffect(() => {
        const getBookmarks = async () => {
            setLoading(true)
            const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
            setArticles(bookmarks)
            setLoading(false)
        }
        getBookmarks()
    }, [])


    const lastNewsIndex = currentPage * newsPerPage
    const firstNewsIndex = lastNewsIndex - newsPerPage
    const currentNews = articles.slice(firstNewsIndex, lastNewsIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)

    return (
        <div className='displayBookmarks'>
            <h2>Bookmarks</h2>
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
            {currentNews.map(item => {
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

       

      </table>
            {articles.length > 5 && <>

                <Pagination
          className="centerPagination"

         
          currentPage={currentPage}
          totalCount={articles.length}
          pageSize={PageSize}
          itemsCountPerPage={1}
          totalItemsCount={45}
          pageRangeDisplayed={10}
          onChange={(page) => setCurrentPage(page)}

        />

                <button className='btnBookmarks' onClick={prevPage}>Prev</button>
                <button className='btnBookmarks ms-2' onClick={nextPage}>Next</button>
            </>
            }

        </div>
        </div>
    )
}

export default Bookmarks
