import axios from "axios";
import { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState();
  const [searchData, setSearchData] = useState([]);
  const [newData, setNewData] = useState({});
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const onClickSearch = () => {
    axios.get(`http://127.0.0.1:8099/search/${keyword}`).then((res) => {
      setSearchData(res.data.items);
    });
  };
  // const onClickSetNewData = ()=>{

  // }
  const onClickAdd = () => {
    axios
      .post(`http://127.0.0.1:8099/add`, { data: { imgSrc: imgSrc, title: title, author: author, desc: desc, link: link } })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="right">
      <div id="search" className="contents">
        <div className="searchBox">
          <input type="text" id="keyword" placeholder="검색어를 입력하세요" name="keyword" onChange={onChangeKeyword} />
          <button id="btnSearch" onClick={onClickSearch}>
            <span className="material-icons"> search </span>
          </button>
          <button id="btnAdd" onClick={onClickAdd}>
            <span className="material-icons">add</span>
          </button>
        </div>
        <div id="result">
          <ul className="list">
            {searchData.map((item, idx) => {
              return (
                <li>
                  <div class="img">
                    <img src={item.image} />
                  </div>
                  <div class="info">
                    <ul>
                      <li class="title">{item.title}</li>
                      <li class="author">{item.author}</li>
                      <li class="desc blind">{item.description}</li>
                      <li class="link blind">{item.link}</li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
