import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks }) {
  const getAllStocks = stocks.map((stock) => {
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
      <h2>Stocks</h2>
      {getAllStocks}
    </div>
  );
}

export default StockContainer;