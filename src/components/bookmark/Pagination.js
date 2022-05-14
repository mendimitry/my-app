const Pagination = ({newsPerPage, totalNews, paginate}) =>{
    
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalNews) / newsPerPage; i++){
      pageNumbers.push(i);
  }
  return(
      <div className="listPagination">
      {
          pageNumbers.map(number => (
  
              <li className="pageItem" key={number}>
                      <a href="/my-app/#/bookmarks" className="pageLink" onClick={()=> paginate(number)}>{number}</a>
              </li>
          ))
      }
      </div>
  )
}

export default Pagination