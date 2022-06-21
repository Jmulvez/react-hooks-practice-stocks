import React, { useState } from "react";

function SearchBar({ stocks }) {
  const [category, setCategory] = useState("");

  function handleCategoryChange(category) {
    setCategory(category);
  }

  const itemsToDisplay = stocks.filter((stock) => {
    if (category === "All") {
      return stocks;
    } else {
      return stock.type === category;
    }
  })
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={null}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={null}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
      {itemsToDisplay}
    </div>
  );
}

export default SearchBar;
