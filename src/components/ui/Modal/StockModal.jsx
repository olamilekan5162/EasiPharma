import React, { useState } from "react";
import "./Modal.css";
import Button from "../button/Button";

const suppliers = ["Supplier A", "Supplier B", "Supplier C"];

const Modal = ({ isOpen, onClose }) => {
  const [stockName, setStockName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState(suppliers[0]);

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
          {suppliers.map((supplier, index) => (
            <option key={index} value={supplier}>
              {supplier}
            </option>
          ))}
        </select>

        <label>Stock Name:</label>
        <input type="text" value={stockName} onChange={(e) => setStockName(e.target.value)} />

        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

        <label>Order Date:</label>
        <input type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />

        <Button onClick={handleSubmit}>Place Order</Button>
      </div>
    </div>
  );
};

export default Modal;
