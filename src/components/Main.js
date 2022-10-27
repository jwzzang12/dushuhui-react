import { Link } from "react-router-dom";

export default function Main() {
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
          <span className="review">Review</span>
        </div>
      </div>
      <div id="mainBottom">
        <ul className="bookList"></ul>
      </div>
    </section>
  );
}
