import "./CenterTitle.scss";
function CenterTitle() {
  return (
    <>
      <div className="centerTitleHead">
        <div className="centerHead">
          <h2>找場地</h2>
          <h3>尋找專屬適合您的運動場地</h3>
        </div>
        <nav>
          <ol className="breadcrumb">
            <li>
              <a href="#">麵包屑1</a>
            </li>
            <li>
              <a href="#">麵包屑2</a>
            </li>
            <li>
              <a href="#">麵包屑3</a>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}
export default CenterTitle;
