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
    setMyStocks((myStocks) => !myStocks);
  }
  
  return (
    <div>
      <SearchBar stocks={stocks} category={stocks.type} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onClick={handleClick} />
          {myStocks ? "TRUE" : "FALSE"}
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={myStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;