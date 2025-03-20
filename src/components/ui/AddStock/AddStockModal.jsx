import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import "./ManageStockModal.css"; 
import { db } from "../../../utils/firebaseConfig.js"
import { collection, addDoc, getDocs } from "firebase/firestore";
import  Spinner  from "../../spinner/Spinner"


const ManageStockModal = ({ isOpen, onClose, updateStock }) => {
  const [stockName, setStockName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [loading, setLoading] = useState(false)
  
  const isFormValid = stockName !== "" && quantity !== "" && expiryDate !== ""

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try{
      const docRef = await addDoc(collection(db, "stocks"), {
        stockName: stockName,
        quantity: quantity,
        expiryDate: expiryDate
      });
      console.log("Document written with ID: ", docRef.id);
      setLoading(false)
      alert(`${stockName} added successfully`)
    }
    catch(e){
      setLoading(false)
      console.log(e)
    }
    
    const stockData = {
      stockName,
      quantity: parseInt(quantity, 10),
      expiryDate,
     
    };

    updateStock(stockData);
    
    
    setStockName("");
    setQuantity("");
    setExpiryDate("");
    onClose(); 
  };

  if (!isOpen) return null; 

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

        

        <div className="modal-buttons">
          <Button onClick={handleSubmit} disabled={!isFormValid}>{loading ? <Spinner loading={loading}/> : "Confirm"}</Button>
          <Button onClick={onClose} className="cancel-button">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default ManageStockModal;
