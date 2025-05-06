import "./MainTitle.scss";
function MainTitle({ title1, title2 }) {
  return (
    <>
      <header className="mainTitle">
        <h2 className="title1">{title1}</h2>
        <p className="title2">{title2}</p>
      </header>
      <hr />
    </>
  );
}
export default MainTitle;
