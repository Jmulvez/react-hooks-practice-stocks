import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(data => setStocks(data))
  }, []);

  function handleClick() {
      if ((stocks) === (stocks)) {
        setMyStocks(myStocks)
      } else if ((stocks) === (myStocks)) {
        setStocks(stocks)
      }
  }
  
  return (
    <div>
      <SearchBar stocks={stocks} category={stocks.type} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onClick={handleClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={myStocks} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;