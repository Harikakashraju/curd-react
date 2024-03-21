import React, { useState } from 'react';
import ItemForm from './ItemForm';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = newItem => {
    setItems([...items, newItem]);
  };

  const editItem = (index, updatedItem) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
    setEditingItem(null);
  };

  const deleteItem = index => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => setEditingItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <ItemForm
        onSubmit={editingItem !== null ? editItem : addItem}
        initialItem={editingItem !== null ? items[editingItem] : ''}
      />
    </div>
  );
};

export default ItemList;




