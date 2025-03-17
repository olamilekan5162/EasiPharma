import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import "./ManageStockModal.css"; 
import { db } from "../../../utils/firebaseConfig.js"
import { collection, addDoc, getDocs } from "firebase/firestore"; 


const ManageStockModal = ({ isOpen, onClose, updateStock }) => {
  const [stockName, setStockName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  // Hooks must always execute
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const docRef = await addDoc(collection(db, "stocks"), {
        stockName: stockName,
        quantity: quantity,
        expiryDate: expiryDate
      });
      console.log("Document written with ID: ", docRef.id);
      alert(`${stockName} added successfully`)
    }
    catch(e){
      console.log(e)
    }
    
    const stockData = {
      stockName,
      quantity: parseInt(quantity, 10),
      expiryDate,
     
    };

    updateStock(stockData);
    
    // Clear input fields after submission
    setStockName("");
    setQuantity("");
    setExpiryDate("");
    onClose(); // Close modal
  };

  if (!isOpen) return null; // Hide modal when isOpen is false

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Stock</h2>

        <label>Stock Name:</label>
        <input 
          type="text" 
          value={stockName} 
          onChange={(e) => setStockName(e.target.value)}
        />
        
        <label>Quantity (
          Carton):</label>
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

        {/* <label>Action:</label>
        <select value={action} onChange={(e) => setAction(e.target.value)}>
          <option value="add">Add Stock</option>
          <option value="remove">Remove Stock</option>
        </select> */}

        <div className="modal-buttons">
          <Button onClick={handleSubmit}>Confirm</Button>
          <Button onClick={onClose} className="cancel-button">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default ManageStockModal;
