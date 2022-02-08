function subFooter() {
  return (
    <div className="above-footer">
      <div className="ab-div1">
        <ul className="ab-ul">
          <li className="ab-li">1</li>
          <li className="ab-li">2</li>
          <li className="ab-li">3</li>
          <li className="ab-li">4</li>
          <li className="ab-li">
            <i className="fas fa-ellipsis-h"></i>
          </li>
          <li className="ab-li" style={{ padding: "10px 20px 10px 20px" }}>
            <i className="fas fa-angle-right"></i>
          </li>
        </ul>
      </div>
      <div className="ab-div2">
        <span>How was your search experience?</span>
        <span className="ab-emoji emoji-active">😕</span>
        <span className="ab-emoji">😄</span>
      </div>
    </div>
  );
}
export default subFooter;
