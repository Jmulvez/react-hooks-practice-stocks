import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks }) {
  const getMyStocks = stocks.map((stock) => {
    return <div>
            <Stock key={stock.id} 
                   ticker={stock.ticker} 
                   name={stock.name} 
                   type={stock.type} 
                   price={stock.price}
                   />
           </div>
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {getMyStocks}
    </div>
  );
}

export default PortfolioContainer;
