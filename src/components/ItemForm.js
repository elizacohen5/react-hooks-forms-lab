import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

const [formData, setFormData] = useState({
  name: "",
  category: "Produce"
})

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  setFormData({
    ...formData,
    [name]: value,
  });
}

  const newFood =  {
    id: uuid(),
    name: formData.name,
    category: formData.category
  }

  return (
    <form className="NewItem" onSubmit={event => {
        event.preventDefault()
        onItemFormSubmit(newFood)
      }}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
