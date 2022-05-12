const Page404 = () => {

  const container = {

    background: "#d6eff8", /* Цвет фона */
    padding: "10px", /* Поля вокруг текста */
    border: "2px solid #0069b5", /* Параметры синей рамки */
    outline: "2px solid #c52b1c",/* Параметры красной рамки */
    width: "800px"

  }
  const body = {
    background: "#002137"
  }
  return (
    <div style={body}>
      <div className="page404">
        <center>
          <img src="http://setupwindows.ru/wp-content/uploads/2018/04/404-wordpress-min.png"></img>
        </center>
      </div>
    </div>
  )
}

export default Page404;