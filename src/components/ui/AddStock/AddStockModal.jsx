import React, { useState } from "react";
import Button from "../button/Button";
import "./ManageStockModal.css"; 

const ManageStockModal = ({ isOpen, onClose, updateStock }) => {
  const [stockName, setStockName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [supplier, setSupplier] = useState("");
  const [action, setAction] = useState("add"); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const stockData = {
      stockName,
      quantity: parseInt(quantity, 10),
      expiryDate,
      supplier,
      action,
    };

    updateStock(stockData);
    
    // Clear input fields after submission
    setStockName("");
    setQuantity("");
    setExpiryDate("");
    setSupplier("");
    onClose(); // Close modal
  };

  if (!isOpen) return null; // Hide modal when isOpen is false

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Manage Stock</h2>
        
        <label>Stock Name:</label>
        <input 
          type="text" 
          value={stockName} 
          onChange={(e) => setStockName(e.target.value)}
        />

        <label>Quantity:</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)}
        />

        <label>Expiry Date:</label>
        <input 
          type="date" 
          value={expiryDate} 
          onChange={(e) => setExpiryDate(e.target.value)}
        />

        <label>Supplier Name:</label>
        <input 
          type="text" 
          value={supplier} 
          onChange={(e) => setSupplier(e.target.value)}
        />

        <label>Action:</label>
        <select value={action} onChange={(e) => setAction(e.target.value)}>
          <option value="add">Add Stock</option>
          <option value="remove">Remove Stock</option>
        </select>

        <div className="modal-buttons">
          <Button onClick={handleSubmit}>Confirm</Button>
          <Button onClick={onClose} className="cancel-button">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default ManageStockModal;
