import React, { useState, useEffect } from "react";
import "./Modal.css";
import Button from "../button/Button";
import { db } from "../../../utils/firebaseConfig.js"
import { collection, addDoc, getDocs } from "firebase/firestore"; 


const Modal = ({ isOpen, onClose }) => {
  const [stockName, setStockName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(suppliers[0]);
  const [stocks, setStocks] = useState([])

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert(`Order placed for ${quantity} of ${stockName} from ${selectedSupplier}  on ${orderDate}`);
    
    // You can send this data to the backend here
    console.log({ stockName, quantity, orderDate });

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
        <input type="text" value={stockName} onChange={(e) => setStockName(e.target.value)} />

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
