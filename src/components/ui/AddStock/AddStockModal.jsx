import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import "./ManageStockModal.css"; 
import { db } from "../../../utils/firebaseConfig.js"
import { collection, addDoc } from "firebase/firestore"; 



const suppliers = ["Supplier A", "Supplier B", "Supplier C"];
const ManageStockModal = ({ isOpen, onClose, updateStock }) => {
  const [stockName, setStockName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
const [selectedSupplier, setSelectedSupplier] = useState(suppliers[0]);
const [stocks, setStocks] = useState([]);

  // Hooks must always execute
  useEffect(() => {
    fetchOrderStock()
  }, [stocks]);

const fetchOrderStock = async () => {
  try {
      const querySnapshot = await getDocs(collection(db, "orderStock"));
      const stockData = querySnapshot.docs.map((doc) => doc.data());
      setStocks(stockData)
    }
    catch(e){
      console.error(e)
    }
  
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const docRef = await addDoc(collection(db, "suppliers"), {
        StockName: stockName,
        quantity: quantity,
        Supplier: selectedSupplier,
        expiryDate: expiryDate
      });
      console.log("Document written with ID: ", docRef.id);
    }
    catch(e){
      console.log(e)
    }
    
    const stockData = {
      stockName,
      quantity: parseInt(quantity, 10),
      expiryDate,
      selectedSupplier,
     
    };

    updateStock(stockData);
    
    // Clear input fields after submission
    setStockName("");
    setQuantity("");
    setExpiryDate("");
    setSelectedSupplier("");
    onClose(); // Close modal
  };

  if (!isOpen) return null; // Hide modal when isOpen is false

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Stock</h2>
        
        <label>Stock Name:</label>
        <select value={stockName} onChange={(e) => setStockName(e.target.value)} required>
          <option value="" disabled>Select a Stock</option>
          {stocks.map((stock) => (
            <option key={stock.id} value={stock.stockName}>{stock.stockName}</option>
          ))}
        </select>

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

<label>Supplier Name</label>
        <select value={selectedSupplier} onChange={(e) => setSelectedSupplier(e.target.value)}>
          {suppliers.map((supplier, index) => (
            <option key={index} value={supplier}>
              {supplier}
            </option>
          ))}
        </select>

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
