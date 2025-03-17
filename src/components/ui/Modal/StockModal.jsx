import React, { useState, useEffect } from "react";
import "./Modal.css";
import Button from "../button/Button";
import { db } from "../../../utils/firebaseConfig.js"
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import  Spinner  from "../../spinner/Spinner"


const Modal = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const [stocks, setStocks] = useState([])
  const [stockName, setStockName] = useState(stocks[0]);
  const [selectedSupplier, setSelectedSupplier] = useState(suppliers[0]);
  const [loading, setLoading] = useState(false)

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
    setLoading(true)
    
    try{
      const docRef = await addDoc(collection(db, "orderStock"), {
        stockName: stockName,
        supplier: selectedSupplier,
        orderDate: orderDate,
        quantity: quantity
      });
      console.log("Document written with ID: ", docRef.id);
      setLoading(false)
      alert(`${stockName} ordered successfully`)
   }catch(e){
     console.error(e)
     setLoading(false)
     alert(e)
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
      <div>
      <Button onClick={handleSubmit}>{loading ? <Spinner loading={loading}/> : "Place Order"}</Button>
        <Button onClick={onClose} className="cancel-button">Cancel</Button>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
