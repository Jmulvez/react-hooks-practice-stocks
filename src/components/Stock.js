import React from "react";

function Stock({ ticker, name, price, key }) {
  return (
    <div>
      <div className="card">
        {key}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">({ticker}): ${price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;