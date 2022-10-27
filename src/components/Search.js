export default function Search() {
  return (
    <section id="right">
      <div id="search" class="contents">
        <div class="searchBox">
          <input type="text" id="keyword" placeholder="검색어를 입력하세요" name="keyword" />
          <button id="btnSearch">
            <span class="material-icons"> search </span>
          </button>
          <button id="btnAdd">
            <span class="material-icons">add</span>
          </button>
        </div>
        <div id="result">
          <ul class="list"></ul>
        </div>
      </div>
    </section>
  );
}
