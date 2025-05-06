import "./Subtitle.scss";

function Subtitle({subtitle, subtitleEN}) {
  return (
    <>
      <div className="member-box">
        <h2 className="member-title">{subtitle}</h2>
        <div className="subtitleWrapper">
          <span className="member-subtitle">{subtitleEN}</span>
          <div className="member-line"></div> {/* 橫線 */}
        </div>
      </div>
    </>
  );
}
export default Subtitle;
