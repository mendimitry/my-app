import { Link } from "react-router-dom";

const Page404 = () => {


  return (

      <div className="page404">
        <center>
        <h1>Страница не известна. Начальная страница : <Link to={`/`} className='card-url'>
            НАЧАЛЬНАЯ Страница
          </Link></h1>
        </center>
      </div>

  )
}

export default Page404;