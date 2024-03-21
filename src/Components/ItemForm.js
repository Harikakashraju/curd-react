import React, { useState } from 'react';

const ItemForm = ({ onSubmit, initialItem }) => {
  const [item, setItem] = useState(initialItem || '');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(item);
    setItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={e => setItem(e.target.value)}
        placeholder="Enter item"
      />
      <button type="submit">{initialItem !== undefined ? 'Add' : 'Update'}</button>
    </form>
  );
};

export default ItemForm;


