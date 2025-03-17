import React, { useState, useEffect } from "react";
import "./Modal.css";
import Button from "../button/Button";
import { db } from "../../../utils/firebaseConfig.js"
import { collection, addDoc, getDocs } from "firebase/firestore"; 


const Modal = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const [stocks, setStocks] = useState([])
  const [stockName, setStockName] = useState(stocks[0]);
  const [selectedSupplier, setSelectedSupplier] = useState(suppliers[0]);

  useEffect(() => {
    fetchData()
  }, [stocks, suppliers]);

const fetchData = async () => {
  try {
      const stockQuerySnapshot = await getDocs(collection(db, "stocks"));
      const stockData = stockQuerySnapshot.docs.map((doc) => doc.data());
      
      const supplierQuerySnapshot = await getDocs(collection(db, "suppliers"));
      const suppliersData = supplierQuerySnapshot.docs.map((doc) => doc.data());
      
      setSuppliers(suppliersData)
      setStocks(stockData)
      
    }
    catch(e){
      console.error(e)
    }
  
}

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const docRef = await addDoc(collection(db, "orderStock"), {
        stockName: stockName,
        quantity: quantity,
        orderDate: orderDate,
        supplier: selectedSupplier
      });
      console.log("Document written with ID: ", docRef.id);
    }
    catch(e){
      console.log(e)
    }

    // Clear form fields
    setStockName("");
    setQuantity("");
    setOrderDate("");
  
    // Close modal
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2 className="order_text">Order Stocks</h2>

        <label>Supplier:</label>
        <select value={selectedSupplier} onChange={(e) => setSelectedSupplier(e.target.value)}>
          {suppliers.map((supplier) => (
            <option key={supplier.id} value={supplier.name}>
              {supplier.name}
            </option>
          ))}
        </select>
        
        <label>Stock Name:</label>
        <select value={stockName} onChange={(e) => setStockName(e.target.value)}>
          {stocks.map((stock) => (
            <option key={stock.id} value={stock.stockName}>
              {stock.stockName}
            </option>
          ))}
        </select>

        <label>Quantity (Carton):</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

        <label>Order Date:</label>
        <input type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />

        <Button onClick={handleSubmit}>Place Order</Button>
      </div>
    </div>
  );
};

export default Modal;
