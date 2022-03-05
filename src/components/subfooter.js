function SubFooter(props) {
  return (
    <div className="above-footer">
      <div className="ab-div1">
        <ul className="ab-ul">
          <button
            className="ab-li"
            style={{ padding: "10px 20px 10px 20px" }}
            onClick={props.prev}
          >
            <i className="fas fa-angle-left"></i>
          </button>
          {props.dec}
          {props.pageNo}
          {props.inc}
          <button
            className="ab-li"
            style={{ padding: "10px 20px 10px 20px" }}
            onClick={props.next}
          >
            <i className="fas fa-angle-right"></i>
          </button>
        </ul>
      </div>
    </div>
  );
}
export default SubFooter;
