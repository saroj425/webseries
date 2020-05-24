import React from "react";

function Cards(props) {
  return (
    <>
      {/* <App /> */}
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="" className="card_image" />
          <div className="card_info">
            <span className="card_category">{[props.title]}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
