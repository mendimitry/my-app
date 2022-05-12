import React from "react";

const About = () => {
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
      <center>

        <div style={container}>

          <section className="section about-section">
            <h1 className="section-title">О себе</h1>
            <h1>
              Жалнин Дмитрий, ИВТ-92, Информатика и вычислительная техника
            </h1>
            <h1>
              Производство сайта: <a href="https://vk.com/zhalnin.dmitrij" target="_blank"
                rel="noreferrer"
                className="card-url"
              >
                Ссылка на разработчика(Вконтакте)
              </a>
              <br></br>
              <a href="mailto:ya.cool-super-dima@yandex.ru&body=привет">Напишите мне на Email</a>
            </h1>
            <img src="https://sun9-68.userapi.com/s/v1/ig2/YWhrJHK0LsDwql_AmHvtekz8f6mN20gIGGid_WqwDgy2kjZyX_aq-e_tve-TwAIxXJweLGhDZM21cIB9QrHlwiXz.jpg?size=1215x2160&quality=95&type=album" width="800" height="1000" />
          </section>
        </div>



      </center>
    </div>
  );
};

export default About;
