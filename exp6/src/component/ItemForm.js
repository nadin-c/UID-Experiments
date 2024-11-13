import React, { useState } from 'react';
import './ItemForm.css';

const ItemForm = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);


  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {

      const updatedItems = items.map((item, index) =>
        index === currentIndex ? { name, description, quantity } : item
      );
      setItems(updatedItems);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {

      const newItem = { name, description, quantity };
      setItems([...items, newItem]);
    }


    setName('');
    setDescription('');
    setQuantity(0);
  };


  const handleEdit = (index) => {
    const item = items[index];
    setName(item.name);
    setDescription(item.description);
    setQuantity(item.quantity);
    setIsEditing(true);
    setCurrentIndex(index);
  };


  const handleDelete = (index) => {
    const filteredItems = items.filter((_, i) => i !== index);
    setItems(filteredItems);
  };

  return (
    <div className="item-form-container">
      <h1>{isEditing ? 'Edit User Details' : 'Add User Details '}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          {isEditing ? 'Update User' : 'Add User'}
        </button>
      </form>

      <div className="items-list">
        <h2>List of Users</h2>
        {items.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - {item.description} (Age: {item.quantity})
                <button onClick={() => handleEdit(index)} className="btn-edit">Edit</button>
                <button onClick={() => handleDelete(index)} className="btn-delete">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ItemForm;
