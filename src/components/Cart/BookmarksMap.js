function BookmarksMap({articles}){
    
    return(
        
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
            {articles.map(articles => {
              return (
                <tr>
                  <td>{articles.id}</td>
                  <td>{articles.url}</td>
                  <td>{articles.title}</td>
                  <td>{articles.updatedAt}</td>
                  <td>{articles.publishedAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </table>
        
        </div>
    )
}

export default BookmarksMap