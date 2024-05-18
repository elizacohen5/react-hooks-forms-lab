import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    const foodSearch = event.target.value;
    setSearch(foodSearch);
    console.log(search)
  }

  console.log(items)
  const selectedItemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true
    } else {
      return item.category === selectedCategory;
    }
  });

  const searchItemsToDisplay = selectedItemsToDisplay.filter((item) => {
    return item.name.includes(search);
  })

  function onItemFormSubmit(obj) {
    // event.preventDefault();
    const newItem = obj
    
    setItems([...items, newItem])
    console.log(newItem.category);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search} />
      <ul className="Items">
        {searchItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
