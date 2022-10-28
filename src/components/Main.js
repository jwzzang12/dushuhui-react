import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Main() {
  const [data, setData] = useState([]);
  const onClickReview = () => {
    window.alert("This is not available yet.");
  };
  useEffect(() => {
    axios.get(`http://127.0.0.1:8099/`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <section id="left">
      <div id="mainTop">
        <h1 id="mainTitle">
          <Link to="/">DUSHUHUI</Link>
        </h1>
        <div className="menu">
          <span>
            <Link to="/">This Week</Link>
          </span>
          <span>
            <Link to="/search">Search</Link>
          </span>
          <span className="review" onClick={onClickReview}>
            Review
          </span>
        </div>
      </div>
      <div id="mainBottom">
        <ul className="bookList">
          {data.map((item, idx) => {
            return (
              <li>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div className="bookCover">
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
