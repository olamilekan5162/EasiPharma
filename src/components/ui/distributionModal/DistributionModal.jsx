import React, { useState, useEffect } from "react";
import Button from "../button/Button";


const DistributionModal = ({ isOpen, onClose }) => {
  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [products, setProducts] = useState([]);

  // Fetch products from database
  useEffect(() => {
    fetch("/api/products") 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const distributionData = {
      customerName,
      productName,
      quantity: parseInt(quantity, 10),
      deliveryDate,
    };

    console.log("Distributed Stock:", distributionData);
    alert("The stock  has been sold successfully!");
    
    // Clear fields
    setCustomerName("");
    setProductName("");
    setQuantity("");
    setDeliveryDate("");
    onClose();
  };

  if (!isOpen) return null; // Hide modal if not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Distribute Stock</h2>
        
        <label>Customer Name:</label>
        <input 
          type="text" 
          value={customerName} 
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />

        <label>Product Name:</label>
        <select value={productName} onChange={(e) => setProductName(e.target.value)} required>
          <option value="" disabled>Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.name}>{product.name}</option>
          ))}
        </select>

        <label>Quantity:</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <label>Delivery Date:</label>
        <input 
          type="date" 
          value={deliveryDate} 
          onChange={(e) => setDeliveryDate(e.target.value)}
          required
        />

        <div className="modal-buttons">
          <Button onClick={handleSubmit}> Sell Stock</Button>
          <Button onClick={onClose} className="cancel-button">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default DistributionModal;
