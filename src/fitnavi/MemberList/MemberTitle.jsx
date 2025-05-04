import "./MemberTitle.scss";

function MemberTitle({title, subtitle}) {
  return (
    <>
      <div className="member-box">
        <h2 className="member-title">{title}</h2>
        <div className="subtitleWrapper">
          <span className="member-subtitle">{subtitle}</span>
          <div className="member-line"></div> {/* 橫線 */}
        </div>
      </div>
    </>
  );
}
export default MemberTitle;
