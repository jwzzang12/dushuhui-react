export default function ThisWeek() {
  const today = new Date();
  const date = new Date("Nov 13,2022, 00:00:00").getTime();
  const gap = date - today;
  const result = Math.floor(gap / (1000 * 60 * 60 * 24));

  return (
    <section className="right">
      <div id="thisWeek" className="contents">
        <div id="dDay">D - {result}</div>
        <div className="bookTW">
          <div className="bookCover"></div>
          <div className="bookInfo"></div>
        </div>
      </div>
    </section>
  );
}
