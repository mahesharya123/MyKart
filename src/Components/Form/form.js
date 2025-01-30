

import './form.css';

import { useState } from 'react';

export const AddItemForm =({ onAddItem })=> {
    const [title, setTitle] = useState("");
    const [discountedprice, setDiscountedPrice] = useState("");
    const [price, setPrice] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [preview, setPreview] = useState(null); // For showing preview
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!title || !discountedprice || !price || !thumbnail) {
        alert("All fields are required");
        return;
      }
  
      const newItem = {
        title,
        discountedprice: Number(discountedprice),
        price: Number(price),
        thumbnail:null // Image file URL
      };
  
      onAddItem(newItem);
  
      // Reset form
      setTitle("");
      setDiscountedPrice("");
      setPrice("");
      setThumbnail(null);
      setPreview(null);
    };
  
    // Handle file selection
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        setThumbnail(URL.createObjectURL(file)); // Store file preview URL
        setPreview(URL.createObjectURL(file)); // Show preview
      } else {
        alert("Only JPG and PNG files are allowed.");
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="add-item-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Discounted Price"
          value={discountedprice}
          onChange={(e) => setDiscountedPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
        />
        {preview && <img src={preview} alt="Preview" className="thumbnail-preview" />}
        <button type="submit">Add Item</button>
      </form>
    );
  }
  